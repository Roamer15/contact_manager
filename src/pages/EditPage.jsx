import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ContactContext } from '../context/Context';
import ContactForm from '../components/ContactForm';

export function EditPage() {
    const { index } = useParams();
    const navigate = useNavigate();
    const { contacts, setContacts } = useContext(ContactContext);
    const [formData, setFormData] = useState({ name: '', telephone: '', email: '', profilePic: null });

    useEffect(() => {
        const contact = contacts[index];
        if (contact) {
            setFormData(contact);
        }
    }, [index, contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, profilePic: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedContacts = [...contacts];
        updatedContacts[index] = formData;
        setContacts(updatedContacts);
        navigate('/');
    };

    return (
        <div className="edit-contact">
            <h2>Edit Contact</h2>
            <ContactForm 
                formData={formData} 
                handleChange={handleChange} 
                handleFileChange={handleFileChange} 
                handleSubmit={handleSubmit} 
                isEditing={true}
            />
        </div>
    );
}