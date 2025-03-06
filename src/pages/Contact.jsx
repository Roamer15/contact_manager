import { useNavigate } from "react-router"
import { useContext } from "react"
import ContactTab from "../components/ContactTab"
import { ContactContext } from "../context/Context"

export default function Contact() {

    const navigate = useNavigate()
    const {contacts, setContacts} = useContext(ContactContext)
    console.log(contacts)
    const handleAddButton = () => {
        navigate("/addContact")
    }

    const handleDelete = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this contact?');
        if (confirmDelete) {
            const updatedContacts = contacts.filter((_, i) => i !== index);
            setContacts(updatedContacts);
        }
    };

    const handleEdit = (index) => {
        // Navigate to the EditContact page with the contact's index
        navigate(`/edit/${index}`);
    };
    return(
        <div className="body-contact">
            <h1>Contacts</h1>
            <input type="search" placeholder="Search Contacts"/>
            <button className="add" onClick={handleAddButton}>+</button>

            <ContactTab contacts={contacts} onDelete={handleDelete} onEdit={handleEdit}/>
        </div>
    )
}