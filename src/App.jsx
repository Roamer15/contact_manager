import './App.css'
import Contact from './pages/Contact'
import NewContact from './pages/NewContact'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Contact />} />
    <Route path='/addContact' element={<NewContact />} />
    <Route path='/editContact' element={<Contact />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
