import React, {useState} from 'react'

function ContactForm() {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        text: ""
    })

    function handleChange(e) {
        const {name, value} = e.target
        setFormValues(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return(
        <form className="contact-form">
            <fieldset className="half-split">
                <div>
                    <label htmlFor="firstName">Jméno</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Jan"
                        value={formValues.firstName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Příjmení</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Novák"
                        value={formValues.lastName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input className="email"
                        type="email"
                        name="email"
                        placeholder="novak@email.cz"
                        value={formValues.email}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="text">Zpráva</label>
                    <textarea className="text"
                        rows="15"
                        name="text"
                        placeholder="Pár slov..."
                        value={formValues.text}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </fieldset>
            <fieldset className="button-wrapper">
                <button type="submit">Odeslat</button>
            </fieldset>
        </form>
    )
}

export default ContactForm