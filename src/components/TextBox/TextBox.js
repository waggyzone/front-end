import { TextField } from "@material-ui/core";
import { useField } from "formik";
import React from "react";
import "./index.css";
const TextBox = ({ name = "", placeHolder = "", type = "text", ...restProps }) => {
  const [field, meta] = useField({ name, type, ...restProps });
  return (
    <div className="container">
      <TextField
      
      {...field}
        className="container__input"
        type={type}
        name={name}
        label={placeHolder}
        error={meta.touched && meta.error}
        {...restProps}
        helperText={meta.touched && meta.error && meta.error}
      />
      
    </div>
  );
};

export {TextBox} ;
