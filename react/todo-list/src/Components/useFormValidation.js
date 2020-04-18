import { useState } from "react";

const useFormValidation = (initialState) => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.value)
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    console.log(values);
  };
  return { handleChange, handleSubmit, values };
};

export default useFormValidation;
