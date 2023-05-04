import ContactOptions from '../components/Contact/ContactOptions'

import '../styles/contact.scss'

const Contact = ({reference}) => {
    return (
        <section className="contact" ref={reference}>
            <h2 className="contact__title">04. contact</h2>
            <div className="contact__text">Choose <span>your way</span> to <span>contact me</span></div>

            <ContactOptions />
        </section>
    )
}

export default Contact