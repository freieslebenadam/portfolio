import React, {useState, useEffect} from 'react'
import axios from 'axios'

function ContactForm() {
    const [formSuccess, setFormSuccess] = useState("")
    const [sending, setSending] = useState(false)
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        text: ""
    })

    useEffect(() => {
        if (formSuccess !== "") {
            setTimeout(() => {
                setFormSuccess("")
            }, 2000)
        }
    }, [formSuccess])

    function handleChange(e) {
        const {name, value} = e.target
        setFormValues(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSending(true)
        axios.post("mail.php", formValues)
            .then((response) => {
                if (response.data === "Fail") {
                    setFormSuccess("Fail")
                    setSending(false)
                }
                else {
                    setFormSuccess("Success")
                    setSending(false)
                    setFormValues({
                        firstName: "",
                        lastName: "",
                        email: "",
                        text: ""
                    })
                }
            }, (error) => {
                console.log(error)
            });
    }

    function buttonElement() {
        if (sending) {
            return <button className="sending" type="submit" disabled={true}>Odesílání...</button>
        }
        else if (formSuccess == "Success") {
            return <button className="success" type="submit" disabled={true}>Odesláno!</button>
        }
        else if (formSuccess == "Fail") {
            return <button className="fail" type="submit" disabled={true}>Neodesláno</button>
        }
        else {
            return <button className="default" type="submit" disabled={false}>Odeslat</button>
        }
    }

    return(
        <form className="contact-form" onSubmit={handleSubmit}>
            <fieldset className="half-split">
                <div>
                    <label htmlFor="firstName">Jméno</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Jan"
                        value={formValues.firstName}
                        onChange={(e) => handleChange(e)}
                        required={true}
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
                        required={true}
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
                        required={true}
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
                        required={true}
                    />
                </div>
            </fieldset>
            <fieldset className="button-wrapper">
                { buttonElement() }
            </fieldset>
        </form>
    )
}

export default ContactForm