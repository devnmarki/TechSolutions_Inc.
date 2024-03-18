import "./Portfolio.scss";

import HuddleScreenshotImage from "../assets/screenshots/huddle_landing_page_sh.png";
import StartScreenshotImage from "../assets/screenshots/start_app_website_sh.png";

const Portfolio = () => {

    return(
        <section className="portfolio">
            <h1 className="portfolio__header">Portfolio</h1>
            <div className="portfolio__projects">
                <div className="project">
                    <img src={HuddleScreenshotImage} />
                    <div className="cta">
                        <h1><span className="highlight">Huddle</span> Landing Page</h1>
                        <p>Take a look at some of our recent projects to see how we've helped clients like you achieve their goals.</p>
                        <div className="btns">
                            <button className="btn src_code_btn">Source Code</button>
                            <button className="btn live_demo_btn">Live Demo</button>
                        </div>
                    </div>
                </div>

                <div className="project start_website_project">
                    <img src={StartScreenshotImage} />
                    <div className="cta">
                        <h1><span className="highlight">Start</span> App Website</h1>
                        <p>From custom software applications to network infrastructure upgrades, each showcases our dedication to quality, innovation, and client satisfaction.</p>
                        <div className="btns">
                            <button className="btn src_code_btn">Source Code</button>
                            <button className="btn live_demo_btn">Live Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Portfolio;