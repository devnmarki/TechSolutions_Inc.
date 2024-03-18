import "./Contact.scss";

const Contact = () => {

    return (
        <section className="contact">
            <h1>Contact <span className="highlight">Us</span></h1>
            <div className="description">
                <p><span className="highlight">Ready to get started?</span> Reach out to us today to discuss how we can assist you with your technology needs.</p>
                <p>Whether you have <span className="highlight">questions, feedback, or inquiries</span>, we're here to help. <span className="highlight">Fill out the form below</span> or contact us directly using the information provided.</p>
            </div>

            <div className="input_form">
                <input type="text" placeholder="Full Name..." className="input_field" />
                <input type="text" placeholder="Email Adress..." className="input_field" />
                <input type="text" placeholder="Message..." className="input_field message_input"/>
                <button className="submit_btn">Submit</button>
            </div>
        </section>
    )

}

export default Contact;