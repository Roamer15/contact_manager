import { useFormik } from "formik";
import { AddContactSchema } from "../schemas/contact-schema";

export default function NewContact() {
    return (
        <div className="form">
            <h2>Create A a new contact</h2>
            <form className="contact-form" onSubmit={handleSubmit}></form>
        </div>
    )
}