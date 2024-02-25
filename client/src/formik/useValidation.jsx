import { useFormik } from "formik";

const useValidation = ({
  initialValues,
  handleSubmit,
  validationSchema,
  enableReinitialize = false,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await handleSubmit(values);
      resetForm();
    },
    enableReinitialize: enableReinitialize,
  });

  return formik;
};

export default useValidation;
