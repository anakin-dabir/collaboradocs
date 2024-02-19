import React from "react";
import { SignupValidationSchema } from "../../formik/validationSchema";
import useValidation from "../../formik/useValidation";
import XTextfield from "../../components/XTextfield";
import XButton from "../../components/XButton";
import { useRegisterMutation } from "../../services/nodeApi";

const Register = () => {
  const initialValues = { email: "", password: "", name: "" };
  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = (values) => {
    register(values);
  };

  const formik = useValidation({
    initialValues,
    handleSubmit,
    validationSchema: SignupValidationSchema,
  });

  return (
    <div className='flex flex-col gap-5'>
      <form className='flex flex-col'>
        <XTextfield
          parentClassName='mt-10'
          fullWidth
          name='name'
          label='Name'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && !!formik.errors.name}
          helperText={formik.touched.name && !!formik.errors.name && formik.errors.name}
        />
        <XTextfield
          parentClassName='mt-10'
          fullWidth
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && !!formik.errors.email && formik.errors.email}
        />
        <XTextfield
          parentClassName='mt-10'
          fullWidth
          name='password'
          label='Password'
          value={formik.values.password}
          onChange={formik.handleChange}
          type='password'
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && !!formik.errors.password && formik.errors.password}
        />
      </form>
      <XButton color='primary' loading={isLoading} onClick={formik.handleSubmit}>
        Register
      </XButton>
    </div>
  );
};

export default Register;
