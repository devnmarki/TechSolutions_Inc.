import "./Services.scss";

import ServiceImage from "../assets/images/undraw_software_engineer_re_tnjc.svg";

const Services = () => {

    return (
        <section className="services">
            <div className="wrapper">
                <div className="services__text">
                    <h1 className="services__text__header"><span className="highlight">Our</span> Services</h1>
                    <p className="description">Discover our comprehensive range of technology solutions designed to address your specific <span className="highlight">needs.</span></p>
                    <p className="description">From <span className="highlight">software development</span> to <span className="highlight">IT consulting</span>, we offer expert solutions that deliver tangible results</p>
                </div>
                <img src={ServiceImage} className="services__image" />
            </div>
        </section>
    )

}

export default Services;