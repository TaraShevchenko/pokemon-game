import Header from "../../components/Header";
import MenuHeader from "../../components/MenuHeader";

import s from './style.module.css'

const GamePage = ({onChangePage}) => {

    const handleClickButton = (page) => {
        onChangePage && onChangePage('app');
    }

    return(
        <div className={s.game}>
            <MenuHeader title='Pokemon'  onClickButton={handleClickButton} />
            <Header title='Game Page' desc='In Future...'/>
        </div>
    )
}

export default GamePage