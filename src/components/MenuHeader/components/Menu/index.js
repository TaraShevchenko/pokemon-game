import s from "../../style.module.css";
import cn from "classnames";
import {Link} from "react-router-dom";

const Menu = ({handleClickNull, isActive}) => {

    const menuItems = [
        {
            title: 'HOME',
            to: '/'
        },
        {
            title: 'GAME',
            to: '/game'
        },
        {
            title: 'ABOUT',
            to: '/about'
        },
        {
            title: 'CONTACT',
            to: '/contact'
        }
    ]

    return (
        <div className={cn(s.menuContainer, {
            [s.active]: isActive === true,
            [s.deactive]: isActive === false
        })}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    {
                        menuItems.map(item =><li><Link onClick={handleClickNull} to={item.to}>{item.title}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu