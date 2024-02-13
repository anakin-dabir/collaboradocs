import * as Yup from "yup";

const emailValidation = Yup.string().email("Invalid Email").required("Email is mandatory");

const passwordValidation = Yup.string()
  .min(8, "Password cannot be less than 8 characters")
  .required("Password is mandatory");

const fullNameValidation = Yup.string().required("Name is mandatory");

const usernameValidation = Yup.string()
  .min(4, "Username must be at least 4 characters")
  .required("Username is mandatory");

const agreeToTerms = Yup.bool().oneOf([true], "You must agree to the terms and conditions");

export const LoginValidationSchema = Yup.object({
  email: emailValidation,
  password: passwordValidation,
});

export const ResetPasswordValidationSchema = Yup.object({
  email: emailValidation,
});

export const SignupValidationSchema = Yup.object({
  email: emailValidation,
  username: usernameValidation,
  fullName: fullNameValidation,
  password: passwordValidation,
  agreeToTerms: agreeToTerms,
});
