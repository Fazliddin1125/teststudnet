import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>Navbar
    <Link to={"/login"} >Kirish</Link>
    </div>
  )
}

export default Navbar