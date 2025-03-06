import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ContactContext } from '../context/Context';

export default function EditPage() {
    const { index } = useParams(); // Get the contact index from the URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        telephone: '',
        email: '',
        profilePic: null,
    });
    const {contacts, setContacts} = useContext(ContactContext)

    // Load the contact data when the component mounts
    useEffect(() => {
        const contact = contacts[index];
        if (contact) {
            setFormData({
                name: contact.name,
                telephone: contact.telephone,
                email: contact.email,
                profilePic: contact.profilePic,
            });
        }
    }, [index, contacts]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file input changes
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, profilePic: file });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedContacts = [...contacts];
        updatedContacts[index] = formData; // Update the contact
        setContacts(updatedContacts); // Update the state
        navigate('/'); // Navigate back to the contact list
    };

    return (
        <div className="edit-contact">
            <h2>Edit Contact</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="telephone">Telephone</label>
                <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="profilePic">Profile Picture</label>
                <input
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    onChange={handleFileChange}
                />

                {formData.profilePic && (
                    <img
                        src={
                            typeof formData.profilePic === 'string'
                                ? formData.profilePic
                                : URL.createObjectURL(formData.profilePic)
                        }
                        alt="Profile Preview"
                        style={{ width: '100px', height: '100px', marginTop: '10px' }}
                    />
                )}

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}