import * as Yup from 'yup'

const emailSchema = 
    Yup.string()
    .email('Invalid Email Address')
    .required("Email Address is Required");

const passwordSchema =
    Yup.string()
    .max(20, "Password must be 20 or fewer characters!")
    .min(8, "Password must be 8 or more characters")
    .required("Password is required")

export {
    emailSchema,
    passwordSchema
}