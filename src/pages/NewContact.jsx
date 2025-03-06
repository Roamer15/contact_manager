// import { useFormik } from "formik";
// import { AddContactSchema } from "../schemas/contact-schema";
// import { InitialContact } from '../constants'

export default function NewContact() {

    // const Error = ({ error }) => {
    //     return error? <div>
    //         <div className="error-container">
    //         <p className="form_error">{error}</p>
    //         </div>
    //         </div>: null;
    // }

    // const { values, handleBlur, handleChange, handleSubmit, errors } =
    // useFormik({
    //     InitialContact,
    //   validationSchema: AddContactSchema,
    // });


    return (
        <div className="form">
            <h2>Create A New Contact</h2>
            <form className="contact-form">
            <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
          />
            <label htmlFor="telephone">Number</label>
          <input
            type="tel"
            name="telephone"
             placeholder="Phone"
          />

            <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
             placeholder="Email"
          />

          <button type="submit">Add Contact</button>
            </form>
        </div>
    )
}