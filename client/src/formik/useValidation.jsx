import { useFormik } from "formik";

const useValidation = ({ initialValues, handleSubmit, validationSchema }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await handleSubmit(values);
      resetForm();
    },
  });

  return formik;
};

export default useValidation;
