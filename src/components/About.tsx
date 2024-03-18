import "./About.scss";

import AboutUsSectionImage from "../assets/images/undraw_about_us_page_re_2jfm.svg";

const About = () => {
    return (
        <section className="about">
            <div className="about__text">
                <h1 className="about__text__header">About <span className="highlight">Us</span></h1>
                <p className="description">At <span className="highlight">TechSolutions Inc.</span>, we're passionate about delivering exceptional technology solutions tailored to meet your unique requirements.</p>
                <p className="description">With over <span className="highlight">10 years of experience</span> in the industry, we pride ourselves on our commitment to excellence, integrity, and customer satisfaction.</p>
            </div>
            <img src={AboutUsSectionImage} className="about__image" />
        </section>
    )
}

export default About;