import * as Yup from 'yup'

export const SignUpSchema = Yup.object({
    name: Yup.string().min(3).required("Please Enter your first name"),
    email: Yup.string().email("Please enter a valid email").required("Please Enter your email"),
    telephone: Yup.number().min(9).required("Please Enter your phone number")
})
