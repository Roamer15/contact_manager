import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ContactContext = createContext();

export const ContactData = ({ children }) => {

    const [contacts, setContacts] = useState([])

    const isDuplicateContact = (contacts, newContact) => {
        return contacts.some(
            (contact) =>
                contact.name.toLowerCase() === newContact.name.toLowerCase() &&
                contact.email.toLowerCase() === newContact.email.toLowerCase() &&
                contact.telephone === newContact.telephone
        );
    };

    const addContact = (newContact) => {
        if (isDuplicateContact(contacts, newContact)) {
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

export default ContactData

ContactData.propTypes = {
    node: PropTypes.node
}