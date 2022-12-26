
import React, { useRef, useState } from 'react'
import { validateLoginSChema } from '../../common';
import TextBox from '../../components/TextBox';
import { Form, Formik } from "formik";


import './index.css'
import { Box, Typography } from '@material-ui/core';


const initialValue ={
    username: "",
    password:""
}

// login page functionalties
// product,accessories
// Proctred Route -> 

const Login = () => {
 const formikRef = useRef();
const [status,setStatus] = useState("")

  const onSubmit = (value) => {
  console.log("values",{value})
  };
  const handleChange = (event) => {
    formikRef.current.setFieldValue(event.target.name, event.target.value);
  };
  

  return (
    <Box className='login'  
    >
    <Formik
        innerRef={formikRef}
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validateLoginSChema}>
        <Form className="login__form">
          <TextBox placeHolder="Username" name="username" onChange={(event) => handleChange(event)} />
          <TextBox
            placeHolder="Password"
            type="password"
            name="password"
            onChange={(event) => handleChange(event)}
          />
          <button type="submit" label="Login" />
        </Form>
      </Formik>
      <Typography></Typography>
    </Box>
  )
}

export default Login
