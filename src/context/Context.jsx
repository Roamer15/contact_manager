import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ContactContext = createContext();

export const ContactData = ({ children }) => {
    const [contacts, setContacts] = useState(() => {
        return JSON.parse(localStorage.getItem('contacts')) || [];
    });

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const isDuplicateContact = (newContact) => {
        return contacts.some(
            (contact) =>
                contact.name.toLowerCase() === newContact.name.toLowerCase() &&
                contact.email.toLowerCase() === newContact.email.toLowerCase() &&
                contact.telephone === newContact.telephone
        );
    };

    const addContact = (newContact) => {
        if (isDuplicateContact(newContact)) {
            alert('This contact already exists!');
            return;
        }
        setContacts([...contacts, newContact]);
    };

    return (
        <ContactContext.Provider value={{ contacts, addContact, setContacts }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactData;

ContactData.propTypes = {
    children: PropTypes.node.isRequired,
};
