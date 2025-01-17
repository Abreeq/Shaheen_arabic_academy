import React ,{useState} from 'react'
import "./Navbar.css"
import{GraduationCap, Menu, X} from "lucide-react"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const[toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle);
    }
  return (
    <div className='navbar-container'>
    <nav className='navbar'>
        <div className="logo">
            <GraduationCap className='graduation-cap'/>
            <h1>Shaheen Arabic Academy</h1>
        </div>
        <ul className='nav-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/competitions'>Competitions</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li className='enroll'><Link to='/enroll'>Enroll Now</Link></li>
        </ul>
        <button className='nav-toggle' onClick={handleToggle}>{toggle ? <X className='menu'/> :<Menu className='menu'/>}</button>
        {toggle && (
            <ul className='mobile-nav-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/courses'>Courses</Link></li>
                <li><Link to='/competitions'>Competitions</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li className='enroll'><Link to='/enroll'>Enroll Now</Link></li>
            </ul>
        )}
    </nav>
    </div>
  )
}

export default Navbar