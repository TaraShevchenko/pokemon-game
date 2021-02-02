/* eslint-disable */

import s from './style.module.css'
import {useState} from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const MenuHeader = ({onClickButton, title}) => {

    const [active, setActive] = useState(false)

    const handleClickActive = () => {
        setActive(!active)
    }

    const handleClick = (page) => {
        console.log('MenuHeader')
        onClickButton && onClickButton(page)
    }

    return (
        <>
            <Menu active={active} title={title} onMenuItemClick={handleClick} />

            <Navbar active={active} title={title} handleClickActive={handleClickActive} />

        </>
    )
}

export default MenuHeader