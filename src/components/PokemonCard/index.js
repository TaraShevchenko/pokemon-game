import cn from 'classnames'
import image from './assets/card-back-side.jpg'

import s from './style.module.css'


const PokemonCard = ({name, id, type, img, values, onClickActive, active, minimize}) => {


    const onClick = () => {
        onClickActive && onClickActive(id)
    }


    return (
        <div className={cn(s.noBoard)}>
            <div onClick={onClick} className={cn(s.pokemonCard, {[s.active]: active})}>
                <div className={s.cardFront}>
                    <div className={cn(s.wrap, s.front)}>
                        <div className={cn(s.pokemon, s[type])}>
                            <div className={s.values}>
                                <div className={cn(s.count, s.top)}> {values.top} </div>
                                <div className={cn(s.count, s.right)}> {values.right} </div>
                                <div className={cn(s.count, s.bottom)}> {values.bottom} </div>
                                <div className={cn(s.count, s.left)}> {values.left} </div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            { !minimize && (<div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}> {name} </h3>
                                <small>Type:<span> {type} </span></small>
                            </div>)}
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={cn(s.wrap, s.back)}>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PokemonCard