import React, { useEffect } from "react";
import XStack from "../../components/XStack";
import XNavbar from "../../components/Custom/XNavbar";
import XButton from "../../components/XButton";
import XDivider from "../../components/Custom/XDivider";
import BackButton from "../../components/Custom/BackButton";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CollabSide from "./components/CollabSide";
import DocAboutSide from "../../components/Custom/DocAboutSide";

const DocumentView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const documents = useSelector((state) => state.document.document);
  const document = documents.find((doc) => doc._id === id);
  useEffect(() => {
    if (!document) navigate("*");
  }, []);
  if (!document) return null;

  return (
    <>
      <XNavbar />
      <XStack className='h-full flex-1 flex flex-row !drop-shadow-none !bg-secondary_background/60 pr-1 pl-6 py-4'>
        <div className='overflow-y-auto relative h-full w-full flex gap-3'>
          <div className='h-full w-[75%]'>
            <XStack className='min-h-full w-full p-8 !bg-secondary_background/90 !drop-shadow-none flex flex-col gap-5'>
              <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-2 justify-between'>
                  <div className='flex gap-4 items-center'>
                    <div className='flex items-center gap-1'>
                      <BackButton />
                      <div className='text-xl font-bold text-primary_main'>{document.title}</div>
                    </div>
                    <XButton disabled className='px-3 py-[0.1rem]'>
                      {document.visibility}
                    </XButton>
                  </div>
                </div>

                <XDivider />
              </div>
            </XStack>
          </div>
          <div className='flex flex-col flex-1 mr-4 gap-3'>
            <DocAboutSide document={document} />
            <CollabSide document={document} />
          </div>
        </div>
      </XStack>
    </>
  );
};

export default DocumentView;
