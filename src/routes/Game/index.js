import {useEffect, useState} from "react";

import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";

import s from './style.module.css'
import database from "../../service/firebase";

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



const GamePage = () => {




    const consolePok = () => {
        console.log(pokemon)

    }

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemon(snapshot.val())
        })
    }, [])


    const addPokemon = () => {
        let newPostKey = database.ref().child("pokemons").push().key
        database.ref('pokemons/' + newPostKey).set(newPokemon, function(error) {
            database.ref('pokemons').once('value', (snapshot) => {
                setPokemon(snapshot.val())
            })
        })
    }

    const onClickActive = (id) => {
        setPokemon(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                }
                acc[item[0]] = pokemon;

                return acc;

            }, {});
        });
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
                            active={active}
                            onClickActive={onClickActive}
                        />
                    )}
                </div>
            </Layout>
        </div>
    )
}

export default GamePage