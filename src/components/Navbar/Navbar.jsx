import React from 'react'
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../images/EDYODA.png'
export default function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='nav_container'>
          <div className='side_nav_left'>
            <Link to={'/'}><img src={Logo} alt="logo" /></Link>
            <select className='select_navbar'>
              <option value="">Course</option>
            </select>
            <select className='select_navbar'>
              <option>Programs</option>
            </select>
          </div>
          <div className='side_nav_right'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <p><Link to="/login" id='log'>LogIn</Link></p>
            <Link to={"/join-now"} className='btn'>Join Now</Link>
          </div>
        </div>
      </div>
    </>
  )
}
