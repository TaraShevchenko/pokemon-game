/* eslint-disable */

import {useState} from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const MenuHeader = ({bgActive, title}) => {

    const [isActive, setActive] = useState(null)

    const handleClickActive = () => {
        setActive(!isActive)
    }

    const handleClickNull = () => {
        setActive(null)
    }

    console.log(bgActive)


    return (
        <div className='menu-header'>
            <Menu isActive={isActive} handleClickNull={handleClickNull}/>

            <Navbar bgActive={bgActive} isActive={isActive} title={title} handleClickActive={handleClickActive}/>

        </div>
    )
}

export default MenuHeader