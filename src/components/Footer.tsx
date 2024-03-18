import "./Footer.scss";

import FacebookIcon from "../assets/icons/facebook_icon.svg";
import InstagramIcon from "../assets/icons/instagram_icon.svg";
import TwitterIcon from "../assets/icons/twitter_icon.svg";

const Footer = () => {

    return(
        <section className="footer">
            <div className="footer__bg">
                 <div className="primary">
                    <h1 className="primary__logo">TechSolutions Inc.</h1>
                    <p className="primary__description">Crafting Exquisite <span className="highlight">Solutions</span> for Your Needs.</p>
                 </div>

                 <div className="secondary">
                     <div className="container">
                        <p>Terms of Services</p>
                        <div className="line"></div>
                        <p>Privacy Policy</p>
                        <div className="line"></div>
                        <p>Copyright TechSolutions Inc.</p> 
                     </div>

                     <div className="social_media">
                        <div className="link">
                            <img src={FacebookIcon} className="icon" />
                        </div>
                        <div className="link">
                            <img src={InstagramIcon} className="icon" />
                        </div>
                        <div className="link">
                            <img src={TwitterIcon} className="icon" />
                        </div>
                     </div>
                 </div>
            </div>
        </section>
    )

}

export default Footer;