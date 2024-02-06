import { CSSProperties, Dispatch, SetStateAction } from "react";
import { FormikProps } from "formik";

export interface IGuiMenu {
  style?: CSSProperties;
  options: any[];
  search: string;
  searchSet: Dispatch<SetStateAction<string>>;
  selectedOptionSet?: Dispatch<SetStateAction<any>>;
  anchorEl: null | HTMLElement;
  anchorElSet: Dispatch<SetStateAction<null | HTMLElement>>;
  formik?: FormikProps<any>;
  name: string;
  tabIndex?: number;
  prefilledOption: string;
  isSystemConstant?: boolean;
  isUser?: boolean;
  error?: boolean;
  simpleBorder?: boolean;
  menuWidth?: string;
  textFieldClassName?: string;
  rtl?: boolean;
  placeholder?: string;
  inputLabel?: string;
}
