import "./Navbar.css"
import Button from "./Button"
import { useState } from "react"

function Navbar() {
    const [header, setHeader] = useState(false);
    const [navBar, setNavBar] = useState(false);

    // Change background pos from "absolute" to "fixed"
    const changeBackground = () => {
        if (window.scrollY > 100) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    // Responsive navigation bar come down and up
    const changeNavBarPos = () => {
        setNavBar(!navBar);
    }

    return (
        <header className={`${header ? "header-active" : "header"}`}>
            <div className="header-cont">
                <img src="/images/logo.png" alt="logo" />
                <nav className={`nav-bar ${navBar && "nav-bar-active"}`}>
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href="/"><li>Product</li></a>
                        <a href="/"><li>About</li></a>
                        <a href="/"><li>Contact</li></a>
                        <Button 
                            btnStyle="bg-none"
                            btnSize="medium-btn"
                            text="Login"
                        />
                    </ul>
                </nav>
                <div 
                    className={`menu-icon ${navBar && "active-menu-icon"}`} 
                    onClick={changeNavBarPos}
                >    
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Navbar