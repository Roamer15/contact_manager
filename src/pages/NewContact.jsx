import { useFormik } from 'formik';
import { AddContactSchema } from '../schemas/contact-schema';
import { InitialContact } from '../constants';
import { useContext } from 'react';
import { ContactContext } from '../context/Context';
import { useNavigate } from 'react-router';

export default function NewContact() {

    const {addContact} = useContext(ContactContext)
    const navigate  = useNavigate()

    const Error = ({ error }) => {
        return error ? <p className="form_error">{error}</p> : null;
    };

    const {
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        setFieldValue, // Ensure this is destructured
    } = useFormik({
        initialValues: {
            ...InitialContact,
            profilePic: null, // Ensure profilePic is in initialValues
        },
        validationSchema: AddContactSchema,
        onSubmit: (values) => {
            console.log('Form values:', values); // Debugging
            addContact(values)
            navigate('/')
        },
    });

    const handleFileChange = (event) => {
        const file = event.currentTarget.files[0];
        console.log('Selected file:', file); // Debugging
        setFieldValue('profilePic', file); // Update Formik's state
    };

    return (
        <div className="form">
            <h2>Create A New Contact</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                {/* Name Field */}
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <Error error={errors?.name} />

                {/* Telephone Field */}
                <label htmlFor="telephone">Number</label>
                <input
                    type="tel"
                    name="telephone"
                    value={values.telephone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <Error error={errors?.telephone} />

                {/* Email Field */}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <Error error={errors?.email} />

                {/* Profile Picture Field */}
                <label htmlFor="profilePic">Profile Picture</label>
                <input
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    onChange={handleFileChange} // Use custom handler
                />
                <Error error={errors?.profilePic} />

                {/* Display image preview */}
                {values.profilePic && (
                    <div>
                        <img
                            src={URL.createObjectURL(values.profilePic)}
                            alt="Profile Preview"
                            style={{ width: '100px', height: '100px', marginTop: '10px' }}
                        />
                    </div>
                )}

                <button type="submit">Add contact</button>
            </form>
        </div>
    );
}