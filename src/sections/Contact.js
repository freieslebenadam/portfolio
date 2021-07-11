import React from 'react'
import '../css/Contact.scss'
import ContactForm from '../components/ContactForm'

function Contact() {
    
    return (
        <article id="contact">
            <div className="container">
                <section className="contact">
                    <h1>Kontaktujte mě</h1>
                    <p>Neváhejte se na mě obrátit s jakýmikoliv připomínkami, nebo podrobnějšími otázkami. Zde mi můžete napsat.</p>
                </section> 
                <ContactForm />
            </div>
        </article>
    )
}

export default Contact