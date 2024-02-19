import { Toaster, ToastBar } from "react-hot-toast";
import XStack from "./XStack";
import { useGenericStyles } from "../themes";
import { clsx } from "clsx";
import { ReactComponent as SuccessIcon } from "@/assets/successIcon.svg";

// In your app

const XToast = () => {
  const classes = useGenericStyles();
  return (
    <Toaster position='top-right' toastOptions={{ duration: 1700 }}>
      {(t) => (
        <ToastBar toast={t} style={{ backgroundColor: "transparent", maxWidth: "410px" }}>
          {({ icon, message }) => {
            return (
              <XStack
                className={clsx(classes.shadowText, "text-white  p-4 gap-1 items-center")}
                direction='row'
              >
                {t.type === "success" ? (
                  <div className='mr-1'>
                    <SuccessIcon />
                  </div>
                ) : (
                  icon
                )}
                {message}
              </XStack>
            );
          }}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default XToast;
