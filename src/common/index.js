
import * as Yup from "yup";
export const validateLoginSChema = Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Please enter password")
})




