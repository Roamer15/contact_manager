import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ContactContext = createContext();

export const ContactData = ({ children }) => {

    const [contacts, setContacts] = useState([])


    const addContact = (newContact) => {
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