import React, { useEffect, useState } from "react";
import XNavbar from "../../components/Custom/XNavbar";
import XStack from "../../components/XStack";
import XLoading from "../../components/XLoading";
import shortName from "../../utils/shortName";
import { Avatar } from "@mui/material";
import BackButton from "../../components/Custom/BackButton";
import XDivider from "../../components/XDivider";
import { useSelector } from "react-redux";
import {
  useGetChangeQuery,
  useLazyGetDocByIdQuery,
  useRevertChangeMutation,
} from "../../services/nodeApi";
import { useNavigate, useParams } from "react-router-dom";
import getDate from "../../utils/getDate";
import diff from "html-diff-ts";
import XButton from "../../components/XButton";
import { isEqual } from "html-differ";
// import { skipToken } from "@reduxjs/toolkit/query";

const Changes = () => {
  const { id } = useParams();
  const naviagte = useNavigate();
  const document = useSelector((state) => state.doc.document);
  const presentDocument = document._id === id;
  useEffect(() => {
    if (!presentDocument) naviagte("*");
  }, []);
  if (!presentDocument) return null;
  const { isLoading, refetch } = useGetChangeQuery({ docId: id });
  useEffect(() => {
    refetch();
  }, [id]);
  const user = useSelector((state) => state.user.user);
  const changes = useSelector((state) => state.doc.change);
  const [btnClicked, btnClickedSet] = useState("");
  const [revertChange, { isLoading: isRevertLoading }] = useRevertChangeMutation();
  const [fetchData] = useLazyGetDocByIdQuery();

  async function handleRevertChange(_id, content) {
    btnClickedSet(_id);
    try {
      const res = await revertChange({ docId: document._id, content: content });
      if (res) {
        fetchData({ docId: document._id });
        setTimeout(() => naviagte(-1), 400);
      }
    } catch (error) {}
  }

  return (
    <>
      <XNavbar />
      <XStack className='h-full flex-1 relative flex flex-row !drop-shadow-none !bg-secondary_background/60 px-2 py-4'>
        {isLoading ? (
          <XLoading absolute />
        ) : (
          <div className='h-full w-full overflow-y-auto mt-2'>
            <div className='container mx-auto max-w-screen-sm'>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                  <BackButton path={-1} />
                  <div className='text-xl font-bold text-primary_main'>Changes</div>
                </div>
                <XDivider />
                <div className='px-2 mt-4 flex flex-col gap-5'>
                  {changes.length ? (
                    changes.map((change, index, arr) => {
                      const firstStr = arr.length === index + 1 ? "" : arr[index + 1].content;
                      const secondStr = arr[index].content;
                      const content = diff(firstStr, secondStr);
                      return (
                        <XStack
                          key={index}
                          className='flex gap-4 !drop-shadow-none !bg-secondary_background/90 p-5'
                        >
                          <div className='flex items-center gap-3'>
                            <Avatar src={change.user?.img}>{shortName(change.user.name)}</Avatar>
                            <div className='flex flex-col'>
                              <div className='text-sm'>
                                <span className='font-bold text-primary_main'>
                                  {change.user.name}
                                </span>{" "}
                                changed the document
                              </div>
                              <div className='text-xs'>{getDate(change.createdAt)}</div>
                            </div>
                          </div>
                          <div dangerouslySetInnerHTML={{ __html: content }} />
                          {document.creator._id === user._id && (
                            <XButton
                              color='success'
                              onClick={() => handleRevertChange(change._id, change.content)}
                              disabled={isEqual(document.content, change.content)}
                              loading={isRevertLoading && change._id === btnClicked}
                            >
                              Revert to this version
                            </XButton>
                          )}
                        </XStack>
                      );
                    })
                  ) : (
                    <div className='text-base'>No requests yet</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </XStack>
    </>
  );
};

export default Changes;
