import { useFormik } from 'formik';
import { AddContactSchema } from '../schemas/contact-schema';
import { InitialContact } from '../constants';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ContactContext } from '../context/Context';
import ContactForm from '../components/ContactForm'

export default function NewContact() {

    const { addContact } = useContext(ContactContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { ...InitialContact, profilePic: null },
        validationSchema: AddContactSchema,
        onSubmit: (values) => {
            addContact(values);
            navigate('/');
        },
    });

    return (
        <div className="form">
            <h2>Create A New Contact</h2>
            <ContactForm 
                formData={formik.values} 
                handleChange={formik.handleChange} 
                handleFileChange={(e) => formik.setFieldValue('profilePic', e.currentTarget.files[0])} 
                handleSubmit={formik.handleSubmit} 
                errors={formik.errors}
                isEditing={false}
            />
        </div>
    );
}
