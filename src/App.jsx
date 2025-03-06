import "./App.css";
import Contact from "./pages/Contact";
import NewContact from "./pages/NewContact";
import { BrowserRouter, Routes, Route } from "react-router";
import { ContactData } from "./context/Context";
import EditPage from "./pages/EditPage";

function App() {
  
  return (
    <ContactData>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/addContact" element={<NewContact />} />
          <Route path="/edit/:index" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </ContactData>
  );
}

export default App;
