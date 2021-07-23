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

    const childMenuClicked = (e) => {
        const a_parent =  document.querySelectorAll(".has-child")
        const bigDevice = window.matchMedia("(min-width:800px)")
        // bigDevice.addListener(handleDeviceChange);
        
        // Check if has active class or not
        if(e.target.parentElement.classList.contains('active')){
            e.target.parentElement.classList.remove("active")
            e.target.setAttribute("aria-expanded", "false")
        }else if(!bigDevice.matches){
            a_parent.forEach((aitem) =>{
                aitem.classList.remove("active")
                aitem.children[0].setAttribute("aria-expanded", "false")
                
                if(e.target.parentElement.classList.contains(aitem.className)){
                    e.target.parentElement.classList.add("active")
                    e.target.setAttribute("aria-expanded", "true")
                    e.preventDefault();
                }   
            })
            
        }
        console.log(bigDevice)
        
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
                        <nav className="menu" onClick={childMenuClicked}>
                            <div className="menu-left">
                                <ul>
                                    <li className="has-child" ><a href="#a" aria-expanded="false">Product</a>
                                        <ul className="child-menu">
                                            <li><a href="#a">Overview</a></li>
                                            <li><a href="#a">Pricing</a></li>
                                            <li><a href="#a">Marketplace</a></li>
                                            <li><a href="#a">Features</a></li>
                                            <li><a href="#a">Integrations</a></li>
                                        </ul>
                                    </li>
                                        
                                    <li className="has-child" ><a href="#a" aria-expanded="false">Company</a>
                                        <ul className="child-menu">
                                            <li><a href="#a">About</a></li>
                                            <li><a href="#a">Team</a></li>
                                            <li><a href="#a">Blog</a></li>
                                            <li><a href="#a">Careers</a></li>
                                        </ul>
                                    </li>
                                        
                                    <li className="has-child" ><a href="#a">Connect</a>
                                        <ul className="child-menu">
                                            <li><a href="#a">Contact</a></li>
                                            <li><a href="#a">Newsletter</a></li>
                                            <li><a href="#a">LinkedIn</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-right">
                                <ul>
                                    <li><a href="#a">Login</a></li>
                                    <li><Button name='btn-light btn-signup' title='Sign Up'/></li>
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
