import React, { useEffect } from "react";
import XStack from "../../components/XStack";
import { useNavigate, useParams } from "react-router-dom";
import { useVerifyEmailMutation } from "../../services/nodeApi";
import XButton from "../../components/XButton";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slice/authSlice";
import XNavbar from "../../components/Custom/XNavbar";

const Verification = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const [verifyEmail, { isError, data }] = useVerifyEmailMutation();
  const navigate = useNavigate();
  useEffect(() => {
    verifyEmail({ token });
  }, []);
  useEffect(() => {
    if (data) {
      dispatch(setUser(data.user));
      navigate("/");
    }
  }, [data]);
  return (
    <>
      <XNavbar disableBorder />
      <div className='fixed inset-0'>
        <XStack
          size='l'
          className='relative-center w-[550px] h-[546px] !drop-shadow-none !bg-secondary_background/30 px-14 py-12 gap-5'
        >
          <div className='text-2xl font-bold text-center text-primary_main drop-shadow-primary'>
            Registration successfull
          </div>
          <div className='text-white mt-5 drop-shadow-primary text-center'>
            Thank you for registeration, wait for a while we are activating your account
          </div>
          {!isError && (
            <div className='box-center mt-10'>
              <span className='relative flex h-20 w-20'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary_main/75'></span>
              </span>
            </div>
          )}
          {isError && (
            <div className='box-center flex-col mt-10 gap-5'>
              <div className='text-error_main'>Error in activating your account</div>
              <XButton onClick={() => navigate("/", { replace: true })}>Home</XButton>
            </div>
          )}
        </XStack>
      </div>
    </>
  );
};

export default Verification;
