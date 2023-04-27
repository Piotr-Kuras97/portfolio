import ContactElements from "./ContactElements"

const menuElements = [
    {
        id: 1,
        text: "about"
    },
    {
        id: 2,
        text: "skills"
    },
    {
        id: 3,
        text: "projects"
    },
    {
        id: 4,
        text: "contact"
    }
]

const MenuElements = ({isActive, about}) => {
    const classes = isActive ? "menu__list active" : "menu__list"

    const goToSection = (text) => {
        if(text === "about"){
            about.current.scrollIntoView({ behavior: 'smooth' })
        } else {
            console.log("Zły przycisk")
        }
    }

    const menuLi = menuElements.map(item => (
        <div key={item.id} className="menu__element">
            <div className="menu__number">.0{item.id}</div>
            <div className="menu__item">
                <p className="menu__link" onClick={() => goToSection(item.text)}>// {item.text}</p>
            </div>
        </div>
    ))

    return (
        <div className={classes}>
            <div className="menu__name">PiotrKuraś <span></span> <span></span></div>
            {menuLi}
            <a href="#" className="menu__resume">Resume</a>
            <ContactElements />
        </div>
    )
}

export default MenuElements