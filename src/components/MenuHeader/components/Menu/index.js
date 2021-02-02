import s from "../../style.module.css";

const Menu = ({onMenuItemClick, active}) => {

    const handleClickHome = () => {
        console.log('handleClickHome')
        onMenuItemClick && onMenuItemClick('home');
    }

    const handleClickGame = () => {
        console.log('handleClickGame')
        onMenuItemClick && onMenuItemClick('game');
    }

    return (
        <div className={`${s.menuContainer} ${active ? s.active : s.deactive}`}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    <li>

                        <a onClick={handleClickHome}>
                            HOME
                        </a>
                    </li>
                    <li>

                        <a onClick={handleClickGame}>
                            GAME
                        </a>
                    </li>
                    <li>

                        <a>
                            ABOUT
                        </a>
                    </li>
                    <li>

                        <a>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu