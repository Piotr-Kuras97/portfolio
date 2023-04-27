const Burger = ({toggle, isActive}) => {
    return (
        <div onClick={toggle} className="menu__burger">
            <span className={isActive ? "rotate" : null}></span>
            <span className={isActive ? "hide" : null}></span>
            <span className={isActive ? "rotate" : null}></span>
        </div>
    )
}

export default Burger