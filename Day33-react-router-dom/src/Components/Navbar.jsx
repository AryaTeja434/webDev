
import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <>
            <div className="flex items-center justify-between px-2">
                <h1 className="font-bold text-2xl">Welcome </h1>
                <div className="flex gap-3">
                    <h1><Link to='/'>Home</Link></h1>
                    <h1><Link to='about'>About Us</Link></h1>
                    <h1><Link to='contact'>Contact Us</Link></h1>
                </div>
            </div>
        </>
    )
}