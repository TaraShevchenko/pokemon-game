import {useHistory} from "react-router-dom";
import s from "../../style.module.css";
import Layout from "../../../../components/Layout";
import PokemonCard from "../../../../components/PokemonCard";
import {useContext, useEffect, useState} from "react";
import {FireBaseContext} from "../../../../context/firebaseContext";

const newPokemon = {
    "abilities" : [ "keen-eye", "tangled-feet", "big-pecks" ],
    "base_experience" : 122,
    "height" : 11,
    "id" : 119,
    "img" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name" : "pidgeotto",
    "stats" : {
        "attack" : 60,
        "defense" : 55,
        "hp" : 63,
        "special-attack" : 50,
        "special-defense" : 50,
        "speed" : 71
    },
    "type" : "flying",
    "values" : {
        "bottom" : 7,
        "left" : 5,
        "right" : 2,
        "top" : "A"
    }
}

const StartPage = () => {

    const history = useHistory()

    const onGameStart = () => {
        history.push('/game/board')
    }

    const firebase = useContext(FireBaseContext);

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        firebase.getPokemonSoket((pokemon) => {
            setPokemon(pokemon)
        })
    }, [])

    const addPokemon = () => {
        const data = newPokemon
        firebase.addPokemon(data)

    }

    const onClickActive = (id) => {
        console.log(board)
        setPokemon(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};

                if (pokemon.id === id) {

                    pokemon.isSelected = !pokemon.isSelected;
                }
                acc[item[0]] = pokemon;

                firebase.postPokemon(item[0], pokemon)

                return acc;

            }, {});
        });
    }

    const board = false

    return (
        <div className={s.game}>
            <div className='flex'>
                <button onClick={addPokemon}>Add Pockemon</button>
                <button onClick={onGameStart}>Start Game</button>
            </div>
            <Layout title='Game Page' children='In Future...'>
                <div className='flex'>
                    {Object.entries(pokemon).map(([key, {values, img, type, id, name, active}]) => <PokemonCard
                            name={name}
                            key={key}
                            id={id}
                            type={type}
                            img={img}
                            values={values}
                            minimize={board}
                            active={active}
                            isSelected={true}
                            selectedClass={false}
                            onClickActive={onClickActive}
                        />
                    )}
                </div>
            </Layout>
        </div>
    )
}

export default StartPage