import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import ContactTab from '../components/ContactTab';
import { ContactContext } from '../context/Context';

export default function Contact() {
    const navigate = useNavigate();
    const { contacts, setContacts } = useContext(ContactContext);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    // Filter contacts based on the search query
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.telephone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddButton = () => {
        navigate('/addContact');
    };

    const handleDelete = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this contact?');
        if (confirmDelete) {
            const updatedContacts = contacts.filter((_, i) => i !== index);
            setContacts(updatedContacts);
        }
    };

    return (
        <div className="body-contact">
            <h1>Contacts</h1>
            <input
                type="search"
                placeholder="Search Contacts"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                style={{ marginBottom: '16px', padding: '8px', width: '100%' }}
            />
            <button className="add" onClick={handleAddButton}>+</button>

            {/* Pass filteredContacts to ContactTab */}
            <ContactTab contacts={filteredContacts} onDelete={handleDelete} />
        </div>
    );
}