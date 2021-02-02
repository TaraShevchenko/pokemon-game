import s from "../../style.module.css";

const Navbar = ({handleClickActive, title, active}) => {

    return (
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    {title}
                </p>

                <a onClick={handleClickActive} className={`${s.menuButton} ${active ? s.active : s.deactive}`}>
                    <span/>
                </a>

            </div>
        </nav>
    )
}

export default Navbar
