import logo from '../images/logo.svg'
import mobileMenu from '../images/icon-hamburger.svg'
import mobileMenuClose from '../images/icon-close.svg'
import Banner from './Banner'
import Button from './Button'
import { useState } from 'react'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openChildMenu, setOpenChildMenu] = useState(false)

    const menuClicked = ()=>{
        const menuOpen = document.querySelector('.menu-wrap');
        
        menuOpen.classList.toggle('active')
        setOpenMenu(!openMenu)
    }

    const childMenuClicked = (e) => {
        const a_parent =  document.querySelectorAll(".has-child");
        const dd_menu_a = document.querySelectorAll(".dd_menu_a");
        
        e.target.setAttribute("aria-expanded", !openChildMenu)
        

        
        a_parent.forEach((aitem) =>{
            if(e.target.classList.contains('active')){
                e.target.parentElement.classList.remove("active")
                e.target.setAttribute("aria-expanded", "false")
                console.log(e)
                
            }else{
                e.target.parentElement.classList.add("active")
            e.target.setAttribute("aria-expanded", "true")
            }
            aitem.classList.remove("active")
            aitem.children[0].setAttribute("aria-expanded", "false")
            setOpenChildMenu(!openChildMenu)
            
            
            
            
            
            
           
                
            // if(e.target.parentElement.classList.contains('active')){
            //     e.target.setAttribute("aria-expanded", "true")
            // }else{
            //     e.target.setAttribute("aria-expanded", "false")
            //     e.target.parentElement.classList.remove("active")
            // }

            // if(e.target.getAttribute('aria-expanded')=== 'false'){
                
            // }
            // a_parent.forEach((aitem) => {
               
                
                
                
            // })
            
            
                // aitem.addEventListener("click", function(){
                    
                //     // dd_menu_a.forEach(function(dd_menu_item){
                //     //     dd_menu_item.classList.remove("active");
                //     // })
                //     // aitem.classList.add("active");
                // })
        })

        // dd_menu_a.forEach(function(dd_menu_item){

        //         dd_menu_item.addEventListener("click", function(){
        //             dd_menu_a.forEach(function(dd_menu_item){
        //                 dd_menu_item.classList.remove("active");
        //             })
        //             dd_menu_item.classList.add("active");
        //         })
        // })
        // const menuChildOpen = document.querySelector('.has-child');
        // if(e.target.parentElement.classList.contains('has-child')){
        //     menuChildOpen.classList.toggle('active')
        //     console.log('click')
        // }
        // console.log(e)
        
        
        // menuOpen.forEach(child => {
        //     child.classList.toggle('active')
        //     setOpenChildMenu(!openChildMenu)
        // });

        
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
                                    <li className="has-child" ><a href="#" aria-expanded="false">Product</a>
                                        <ul className="child-menu">
                                            <li><a href="#">Overview</a></li>
                                            <li><a href="#">Pricing</a></li>
                                            <li><a href="#">Marketplace</a></li>
                                            <li><a href="#">Features</a></li>
                                            <li><a href="#">Integrations</a></li>
                                        </ul>
                                    </li>
                                        
                                    <li className="has-child" ><a href="#" aria-expanded="false">Company</a>
                                        <ul className="child-menu">
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Team</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Careers</a></li>
                                        </ul>
                                    </li>
                                        
                                    <li className="has-child" ><a href="#">Connect</a>
                                        <ul className="child-menu">
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">LinkedIn</a></li>
                                        </ul>
                                    </li>
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
