import { Toaster, ToastBar } from "react-hot-toast";
import XStack from "./XStack";
import { useGenericStyles } from "../themes";
import { clsx } from "clsx";
import { ReactComponent as SuccessIcon } from "@/assets/successIcon.svg";
import { ReactComponent as WarningIcon } from "@/assets/warningIcon.svg";
import { ReactComponent as ErrorIcon } from "@/assets/errorIcon.svg";
import { ReactComponent as InfoIcon } from "@/assets/infoIcon.svg";
import { ReactComponent as SnackbarTopCenterIcon } from "@/assets/snackbarTopCenterIcon.svg";

// In your app

const XToast = () => {
  const classes = useGenericStyles();
  return (
    <Toaster position='top-right' toastOptions={{ duration: 1200 }}>
      {(t) => (
        <ToastBar toast={t} style={{ backgroundColor: "transparent", maxWidth: "410px" }}>
          {({ icon, message }) => {
            console.log({ t });
            return (
              <XStack
                className={clsx(classes.shadowText, "text-white  p-4 gap-1 items-center")}
                direction='row'
              >
                {t.type === "success" ? <SuccessIcon /> : icon}
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
