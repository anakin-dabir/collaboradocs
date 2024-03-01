import React, {useState} from "react";
import XAlertBase from "../../../components/Alert/XAlertBase";
import {ReactComponent as Edit} from "@/assets/custom/edit.svg";
import {ReactComponent as CloseIcon} from "@/assets/close.svg";
import {Avatar, IconButton, MenuItem, alpha} from "@mui/material";
import XTooltip from "../../../components/XTooltip";
import XDivider from "../../../components/Custom/XDivider";
import XTextfield from "../../../components/XTextfield";
import theme from "../../../themes";
import XButton from "../../../components/XButton";
import useValidation from "../../../formik/useValidation";
import {nameValidationSchema} from "../../../formik/validationSchema";
import {useCreateRequestMutation, useSearchUserMutation} from "../../../services/nodeApi";
import shortName from "../../../utils/shortName";
import {useSelector} from "react-redux";

const UserAddDialog = ({isOpen, isOpenSet, project}) => {
  const [searchUser, {isLoading}] = useSearchUserMutation();
  const [createRequest, {isLoading: isRequestLoading}] = useCreateRequestMutation();
  const user = useSelector(state => state.user.user);
  const [userFound, userFoundSet] = useState([user]);
  const [selectedUser, selectedUserSet] = useState([]);
  const [step, stepSet] = useState(1);
  const socket = useSelector(state => state.socket.socket);

  const handleClick = userId => {
    selectedUserSet(prev => {
      if (prev.includes(userId)) {
        return prev.filter(id => id !== userId);
      } else {
        return [...prev, userId];
      }
    });
  };
  async function handleSubmit(values) {
    try {
      const response = await searchUser(values);
      if (response) {
        const newFilteredData = response.data.user.filter(foundedUser => {
          return !project.members.some(member => member._id === foundedUser._id);
        });
        userFoundSet(newFilteredData);
        if (newFilteredData.length > 0) {
          stepSet(2);
        }
      }
    } catch (error) {}
  }

  async function handleCreateRequest() {
    try {
      const res = await createRequest({
        projectId: project._id,
        userId: selectedUser,
        type: "GoingFromAdmin",
      });
      if (res) {
        socket.emit("event:GoingFromAdmin", {userIdArray: selectedUser});
        handleClose();
      }
    } catch (error) {}
  }
  const initialValues = {name: ""};
  const formik = useValidation({
    initialValues,
    validationSchema: nameValidationSchema,
    handleSubmit,
    enableReinitialize: true,
  });
  const handleClose = () => {
    isOpenSet(false);
    stepSet(1);
    userFoundSet([user]);
    selectedUserSet([]);
    formik.handleReset();
  };
  return (
    <XAlertBase isOpen={isOpen} onClose={handleClose}>
      <div className="px-10 py-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Edit className="size-7" />
            <div className="text-xl leading-3 font-bold text-primary_main">Add User</div>
          </div>
          <XTooltip data="Close" placement="top">
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </XTooltip>
        </div>
        <XDivider />
        {step === 1 && (
          <div className="flex flex-col">
            <div className="text text-sm">Search for the user to request</div>
            <div className="flex items-center gap-4">
              <XTextfield
                name="name"
                autoFocus
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && !!formik.errors.name}
                helperText={formik.touched.name && !!formik.errors.name && "Name is mandatory"}
                label="Enter Name"
                parentClassName="mt-8"
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: `${alpha(theme.palette.common.black, 0.4)} !important`,
                  },
                }}
              />
              <XButton
                color="primary"
                loading={isLoading}
                className={`${formik.touched.name && !!formik.errors.name ? "mt-2" : "mt-7"}`}
                onClick={formik.handleSubmit}
              >
                Search
              </XButton>
            </div>
            {userFound.length === 0 ? (
              <div className="text-sm mt-2 text-error_main">No user found</div>
            ) : null}
          </div>
        )}

        {step === 2 && (
          <div className="min-h-40 max-h-52 overflow-y-auto gap-4 flex flex-col px-5 py-3">
            {userFound.length ? (
              userFound.map((user, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleClick(user._id)}
                    className={`flex items-center gap-3 w-full p-2 cursor-pointer hover:bg-primary_main/10 transition-all duration-300 ${
                      selectedUser.includes(user._id) ? "bg-primary_main/50" : ""
                    }`}
                    style={{
                      clipPath: `polygon(13px 0,100% 0,100% calc(100% - 13px),calc(100% - 13px) 100%,0 100%,0 13px)`,
                    }}
                  >
                    <Avatar src={user?.img}>{shortName(user.name)}</Avatar>
                    <div className="flex flex-col">
                      <div className="text-sm font-bold text-primary_main">{user.name}</div>
                      <div className="text-xs">{user.email}</div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No User found</div>
            )}
          </div>
        )}

        <div className={`flex flex-col gap-5 ${step === 2 ? "mt-3" : "mt-10"}`}>
          <hr className="border-t border-t-primary_main" />
          <div className="flex gap-4 justify-end">
            <XButton
              color="error"
              onClick={() => {
                step === 2 ? stepSet(1) : handleClose();
              }}
            >
              {step === 2 ? "Back" : "Cancel"}
            </XButton>
            <XButton
              disabled={selectedUser.length > 0 ? false : true}
              onClick={handleCreateRequest}
              loading={isRequestLoading}
            >
              Request
            </XButton>
          </div>
        </div>
      </div>
    </XAlertBase>
  );
};

export default UserAddDialog;
