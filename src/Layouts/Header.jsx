import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [headerColor, setHeaderColor] = useState(false);

    useEffect(() => {
        const changeHeaderColorOnScroll = () => {
            if (window.scrollY > 50) {
                setHeaderColor(true);
            } else {
                setHeaderColor(false);
            }
        };
        window.addEventListener('scroll', changeHeaderColorOnScroll);
        return () => {
            window.removeEventListener('scroll', changeHeaderColorOnScroll);
        };
    }, []);
    return (
        <div>
            <header>
                <nav className={`navbar navbar-expand-lg navbar-light header ${headerColor ? 'header-scrolled' : ''}`} style={{ zIndex: '999999' }}>
                    <div class="container-fluid">
                        <h4 class="navbar-brand mx-5" href="#">Portfo<span>lio.</span></h4>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink class="nav-link active mx-4" aria-current="page" to='/'>Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active mx-4" aria-current="page" to='/aboutpage'>About</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active mx-4" aria-current="page" to="/skillpage">Skills</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active mx-4" aria-current="page" to="/projectpage">Projects</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active mx-4" aria-current="page" to="/contactpage">Contact</NavLink>
                                </li>
                                {/* <li class="nav-item">
                                    <NavLink class="nav-link active mx-4" aria-current="page" href="#">Resume</NavLink>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </header>


        </div>
    )
}

export default Header
