import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link className="navbar-brand" to="#">EMP</Link>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to={'/register'}>Register</Link>
            <Link className="nav-link" to={'/login'}>Login</Link>
            <Link className="nav-link" to={'/showData'}>ShowData</Link>
     
        </div>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Navbar