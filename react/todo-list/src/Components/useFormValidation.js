import { useState, useEffect } from "react";

const useFormValidation = (initialState, validate, authenticate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        authenticate();
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = () => {
    const validateErrors = validate(values);
    setErrors(validateErrors);
  };

  const handleSubmit = (e) => {
    const validateErrors = validate(values);
    setErrors(validateErrors);
    setIsSubmitting(true);
    e.preventDefault();
  };

  return {
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
  };
};

export default useFormValidation;
