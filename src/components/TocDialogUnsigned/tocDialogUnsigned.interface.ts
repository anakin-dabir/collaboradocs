import { Dispatch, SetStateAction } from "react";

export interface ITocDialogUnsigned {
  open: boolean;
  openSet: Dispatch<SetStateAction<boolean>>;
}
