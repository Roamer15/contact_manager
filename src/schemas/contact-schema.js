import * as Yup from 'yup'

export const AddContactSchema = Yup.object({
    name: Yup.string().min(3).required("Please Enter your name"),
    email: Yup.string().email("Please enter a valid email").required("Please Enter your email"),
    telephone: Yup.number().min(9).required("Please Enter your phone number")
})
