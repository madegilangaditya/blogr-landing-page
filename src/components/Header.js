import logo from '../images/logo.svg'
import mobileMenu from '../images/icon-hamburger.svg'
import mobileMenuClose from '../images/icon-close.svg'
import Banner from './Banner'
import Button from './Button'
import { useState } from 'react'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const menuClicked = ()=>{
        const menuOpen = document.querySelector('.menu-wrap');
        
        menuOpen.classList.toggle('active')
        setOpenMenu(!openMenu)
    }

    return (
        <header>
            <div className="container">
                <div className="row flex">
                    <div className="col col-left">
                        <div className="logo-wrap">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>
                    <div className="mobile-menu-icon" onClick={menuClicked}>
                        <img src={ !openMenu ? mobileMenu : mobileMenuClose} alt="" />
                    </div>
                    <div className="col col-right menu-wrap">
                        <nav className="menu">
                            <div className="menu-left">
                                <ul>
                                    <li className="has-child"><a href="#">Product</a></li>
                                        <ul className="child-menu">
                                            <li><a href="#">Overview</a></li>
                                            <li><a href="#">Pricing</a></li>
                                            <li><a href="#">Marketplace</a></li>
                                            <li><a href="#">Features</a></li>
                                            <li><a href="#">Integrations</a></li>
                                        </ul>
                                    <li className="has-child"><a href="#">Company</a></li>
                                        <ul className="child-menu">
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Team</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Careers</a></li>
                                        </ul>
                                    <li className="has-child"><a href="#">Connect</a></li>
                                        <ul className="child-menu">
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">LinkedIn</a></li>
                                        </ul>
                                </ul>
                            </div>
                            <div className="menu-right">
                                <ul>
                                    <li><a href="#">Login</a></li>
                                    <li><Button name='btn-light' title='Sign Up'/></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <Banner/>
            </div>
        </header>
    )
}

export default Header
