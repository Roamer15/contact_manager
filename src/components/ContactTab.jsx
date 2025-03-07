import { useNavigate } from "react-router";

export default function ContactTab({ contacts, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <div key={index} className="contact-item">
          <img
            src={
              contact.profilePic instanceof File
                ? URL.createObjectURL(contact.profilePic) // Only create object URL for File objects
                : "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
            }
            alt="Profile"
          />

          <div className="info">
            <h3>{contact.name}</h3>
            <p>{contact.telephone}</p>
            <p>{contact.email}</p>
          </div>
          <div className="btns">
            <button
              className="edit-btn"
              onClick={() => navigate(`/edit/${index}`)} // Pass contact and index to onEdit
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => onDelete(index)} // Pass index to onDelete
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
