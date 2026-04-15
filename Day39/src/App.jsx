import Navbar from "./Navbar";
import Home from "./pages/Home";
import {Route,Routes} from "react-router-dom"
import Image from "./pages/Image";


function App() {

  return (
    <>
      <Navbar></Navbar>   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/image" element={<Image/>}/>
      </Routes>
     
    </>
  )
}
export default App