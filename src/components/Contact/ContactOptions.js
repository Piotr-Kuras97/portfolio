import { useState } from 'react'

import ContactPopup from './ContactPopup';

const ContactOptions = () => {

    const [email, setEmail] = useState('piotr.kuras.1997@gmail.com');
    const [isActive, setIsActive] = useState(false)

    const handleClick = async () => {
        try {
        await navigator.clipboard.writeText(email);
        console.log('Email copied to clipboard!');
        } catch (err) {
        console.error('Failed to copy email: ', err);
        }

        setIsActive(true)
        setTimeout(() => {
            setIsActive(false)
        },3000)
    };

    return (
        <>
            <div className="contact__options-group">
                <a href="https://www.linkedin.com/in/piotr-kura%C5%9B-5a67721b2/" target="_blank" rel="noreferrer" className="contact__option"><button className="contact__option-btn"><i className="fa-brands fa-linkedin"></i>Linkedin</button></a>
                <a href="mailto: piotr.kuras.1997@gmail.com" className="contact__option"><button className="contact__option-btn"><i className="fa-solid fa-envelope"></i>E-mail</button></a>
                <button className="contact__option contact__option-btn copy" onClick={!isActive ? handleClick : null}>piotr.kuras.1997@gmail.com</button>
            </div>
            {isActive ? <ContactPopup /> : null}
         </>
    )
}

export default ContactOptions