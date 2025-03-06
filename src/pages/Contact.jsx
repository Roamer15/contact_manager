import { useNavigate } from "react-router"

export default function Contact() {

    const navigate = useNavigate()
    const handleAddButton = () => {
        navigate("/addContact")
    }
    return(
        <div className="body-contact">
            <h1>Contacts</h1>
            <input type="search" placeholder="Search Contacts"/>
            <button className="add" onClick={handleAddButton}>+</button>
        </div>
    )
}