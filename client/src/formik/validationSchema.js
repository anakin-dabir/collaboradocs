import * as Yup from "yup";

const emailValidation = Yup.string().email("Invalid Email").required("Email is mandatory");

const passwordValidation = Yup.string()
  .min(4, "Password cannot be less than 4 characters")
  .required("Password is mandatory");

const nameValidation = Yup.string().required("Name is mandatory");

const usernameValidation = Yup.string()
  .min(4, "Username must be at least 4 characters")
  .required("Username is mandatory");

const agreeToTerms = Yup.bool().oneOf([true], "You must agree to the terms and conditions");

const file = Yup.mixed().required("File is required");

const LoginValidationSchema = Yup.object({
  email: emailValidation,
  password: passwordValidation,
});

const ResetPasswordValidationSchema = Yup.object({
  email: emailValidation,
});

const SignupValidationSchema = Yup.object({
  email: emailValidation,
  name: nameValidation,
  password: passwordValidation,
});

const FileValidationSchema = Yup.object({
  file: file,
});

const nameValidationSchema = Yup.object({
  name: nameValidation,
});

const projectNameValidationSchema = Yup.object({
  projectName: nameValidation,
});

const docValidationSchema = Yup.object({
  title: nameValidation,
  desc: nameValidation,
  visibility: nameValidation,
});

const nameImgValidationSchema = Yup.object({
  name: nameValidation,
  img: nameValidation,
});

export {
  LoginValidationSchema,
  ResetPasswordValidationSchema,
  SignupValidationSchema,
  FileValidationSchema,
  nameValidationSchema,
  projectNameValidationSchema,
  docValidationSchema,
  nameImgValidationSchema,
};
