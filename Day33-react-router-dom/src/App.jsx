
import { Routes,Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Profile from "./Components/Profile"

function App(){
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/:userId" element={<Profile/>} />
      </Routes>
    </>
  )
}
export default App