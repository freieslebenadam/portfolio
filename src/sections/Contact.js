import React from 'react'
import '../css/Contact.css'
import ContactForm from '../components/ContactForm'

function Contact() {
    
    return (
        <article id="contact">
            <div className="container">
                <section className="contact">
                    <h1>Kontaktujte mě</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sagittis hendrerit ante. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil ipsum dolor sit amet.</p>
                </section> 
                <ContactForm />
            </div>
        </article>
    )
}

export default Contact