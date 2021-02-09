import s from './style.module.css';
import React, {useContext, useEffect, useState} from "react";
import Layout from "../../../../components/Layout";
import PokemonCard from "../../../../components/PokemonCard";
import {FireBaseContext} from "../../../../context/firebaseContext";

const BoardPage = () => {

    const firebase = useContext(FireBaseContext);

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        firebase.getPokemonSoket((pokemon) => {
            setPokemon(pokemon)
        })
    }, [])

    const board = true;

    return (
        <div className={s.root}>

            <div className={s.playerOne}>

                    <div className='flex'>
                        {Object.entries(pokemon).map(([key, {values, img, type, id, name, active, isSelected}]) =>
                            <PokemonCard
                                name={name}
                                key={key}
                                id={id}
                                type={type}
                                img={img}
                                values={values}
                                active={active}
                                minimize={board}
                                isSelected={isSelected}
                                selectedClass={isSelected}
                            />
                        )}
                    </div>

            </div>

            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;