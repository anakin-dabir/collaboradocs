import React, {useEffect, useState} from "react";
import XStack from "../XStack";
import Xlogo from "./XLogo";
import {useSelector, useDispatch} from "react-redux";
import {setInitiated} from "../../store/slice/welcomeSlice";

const Welcome = () => {
  const initiated = useSelector(state => state.welcome.initiated);
  const dispatch = useDispatch();
  const [transition, transitionSet] = useState(false);

  useEffect(() => {
    setTimeout(() => transitionSet(true), 4000);
    setTimeout(() => dispatch(setInitiated()), 5000);
  }, []);

  if (initiated) return null;
  return (
    <div className="fixed inset-0 box-center z-50">
      <XStack
        size="l"
        className="w-[550px] fixed transition-opacity !drop-shadow-none !bg-transparent/70 duration-500 px-14 py-12 gap-5"
        style={{opacity: transition && `0`}}
      >
        <div className="box-center flex-col gap-7">
          <div className="flex flex-col gap-2">
            <Xlogo />
            <div className="text-sm text-center text-primary_light drop-shadow-primary">
              Real-time collaboration, anywhere, anytime
            </div>
          </div>
          <div className="text-lg text-center">
            Welcome to the collaborative workspace! Edit documents seamlessly with your team, Ditch
            the version chaos. Collaborate on documents like never before.
          </div>
        </div>
      </XStack>
    </div>
  );
};

export default Welcome;
