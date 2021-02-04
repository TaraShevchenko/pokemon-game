import s from "../../style.module.css";
import cn from 'classnames'
import {Link} from "react-router-dom";

const Navbar = ({bgActive ,handleClickActive, title, isActive}) => {

    return (
        <nav className={cn(s.navbar,{[s.bgActive]: bgActive})}>
            <div className={s.navWrapper}>
                <Link to="/" className={cn(s.brand, {[s.disable]: !bgActive})}>
                    {title}
                </Link>

                <a onClick={handleClickActive} className={cn(s.menuButton, {
                    [s.active]: isActive === true,
                    [s.deactive]: isActive === false
                })}>
                    <span/>
                </a>

            </div>
        </nav>
    )
}

export default Navbar
