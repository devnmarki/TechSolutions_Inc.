import "./Hero.scss";

import HeroImage from "../assets/images/undraw_logic_re_nyb4.svg";

const Hero = () => {

    return (
        <section className="hero">
            <div className="hero__wrapper">
                <img src={HeroImage} className="hero__image" />

                <div className="hero__text">
                    <h1 className="hero__header">Welcome to TechSolutions <span className="highlight">Inc</span>.</h1>
                    <p className="subheadline">Crafting Exquisite <span className="highlight">Solutions</span> for Your Needs.</p>
                    <button className="cta">Explore Our Services</button>
                </div>
            </div>
        </section>
    )

}

export default Hero;