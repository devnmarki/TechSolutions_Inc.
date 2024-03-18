import "./NavBar.scss";

import { useState } from "react";

import MenuIcon from "../assets/icons/hamburger_menu_icon.svg";
import CloseMenuIcon from "../assets/icons/close_menu_icon.svg";

const NavBar = () => {

    const [menuClass, setMenuClass] = useState("menu close");
    const [openMenuClass, setOpenMenuClass] = useState("header__menu open");
    const [closeMenuClass, setCloseMenuClass] = useState("close_menu close");
    const [fadeClass, setFadeClass] = useState("fade close");

    const manageMenu = () => {

        if(fadeClass === "fade open" && menuClass === "menu open"){
            setFadeClass("fade close");
            setMenuClass("menu close");
            setOpenMenuClass("header__menu open");
            setCloseMenuClass("header__menu close");
        }else{
            setFadeClass("fade open");
            setMenuClass("menu open");
            setOpenMenuClass("header__menu close");
            setCloseMenuClass("header__menu open");
        }

    }

    return (
        <header className="header">
            <div className="wrapper">
                <h1 className="header__logo">TechSolutions <span>Inc.</span></h1>
                <img src={MenuIcon} className={openMenuClass} onClick={manageMenu} />
                <img src={CloseMenuIcon} className={closeMenuClass} onClick={manageMenu} />

                <div className="header__tabs">
                    <a href="#" className="tab about_us_tab">About Us</a>
                    <a href="#" className="tab">Service</a>
                    <a href="#" className="tab">Portfolio</a>
                    <a href="#" className="tab">Contact</a>
                </div>

                <div className={menuClass}>
                    <div className="menu_tabs">
                        <a href="#" className="tab about_us_tab">About Us</a>
                        <a href="#" className="tab">Service</a>
                        <a href="#" className="tab">Portfolio</a>
                        <a href="#" className="tab">Contact</a>
                    </div>
                </div>
            </div>

            <div className={fadeClass}></div>
        </header>
    )

}

export default NavBar;