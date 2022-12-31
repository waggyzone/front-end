
import * as Yup from "yup";
export const validateLoginSChema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Please enter password")
})


export const validateProductSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    brandname: Yup.string().required("Required"),
    price: Yup.number().required("Required")

})

export const validateAccessoriesSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    size: Yup.string(),
    color: Yup.string(),
    price: Yup.number().required("Required")
})


