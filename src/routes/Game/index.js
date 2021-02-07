import {useEffect, useState} from "react";

import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";

import s from './style.module.css'
import database from "../../service/firebase";

const pokemon = [
    {
        "abilities": [
            "keen-eye",
            "tangled-feet",
            "big-pecks"
        ],
        "stats": {
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "special-attack": 50,
            "special-defense": 50,
            "speed": 71
        },
        "type": "flying",
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        "name": "pidgeotto",
        "base_experience": 122,
        "height": 11,
        "id": 17,
        "values": {
            "top": "A",
            "right": 2,
            "bottom": 7,
            "left": 5
        }
    }
]


const GamePage = () => {



    const [isActive, setActive] = useState([])

    const onClickActive = (id) => {
        isActive.includes(id)
            ? setActive(isActive.filter(el => el !== id))
            : setActive([...isActive, id])
    }

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemon(snapshot.val())
        })
    }, [])



    const addPokemon = () => {
        let newPostKey = database.ref().child("pokemons").push().key
        console.log(newPostKey)
        let value = {}
        database.ref('pokemons/' + newPostKey).set({
            value
        })
        console.log(value)
        console.log(pokemon)
    }


    return (
        <div className={s.game}>
            <div className='flex'>
                <button onClick={addPokemon}>Add Pockemon</button>

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
                            isActive={isActive}
                            onClickActive={onClickActive}
                        />
                    )}
                </div>

            </Layout>


        </div>
    )
}

export default GamePage