
import React, { useRef, useState } from 'react'
import { validateAccessoriesSchema } from '../../common';
import TextBox from '../../components/TextBox';
import { Form, Formik } from "formik";


import './index.css'
import { Box, Typography } from '@material-ui/core';


const initialValue ={
    name: "",
    size: "",
    color: "",
    price: ""
}

const Accessories = () => {
 const formikRef = useRef();
const [status,setStatus] = useState("")

  const onSubmit = (value) => {
  console.log("values",{value})
  };
  const handleChange = (event) => {
    formikRef.current.setFieldValue(event.target.name, event.target.value);
  };
  

  return (
    <Box className='accessories'  
    >
    <Formik
        innerRef={formikRef}
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validateAccessoriesSchema}>
        <Form className="accessories__form">
          <TextBox placeHolder="Name" name="name" onChange={(event) => handleChange(event)} />
          <TextBox placeHolder="Size" name="size" onChange={(event) => handleChange(event)} />
          <TextBox placeHolder="Color" name="color" onChange={(event) => handleChange(event)} />
          <TextBox placeHolder="Price" name="price" onChange={(event) => handleChange(event)} />
         
          <button type="submit" label="Add" />
        </Form>
      </Formik>
      <Typography></Typography>
    </Box>
  )
}

export default Accessories
