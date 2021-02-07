import '../../App.css';
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";

import layoutBgOne from "../../assets/background3.jpg"
import layoutBgTwo from "../../assets/background2.jpg"
import {useEffect, useState} from "react";
import database from "../../service/firebase";

const HomePage = () => {


    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemon(snapshot.val())
        })
    }, [])

    const [isActive, setActive] = useState([])

    const onClickActive = (id) => {
        isActive.includes(id)
            ? setActive( isActive.filter(el => el !== id))
            : setActive( [...isActive, id])
    }


    return (
        <div className="App">
            <Header title='Pokemon' desc='good game'/>

            <Layout title='Rules' id='Rules' urlBg={layoutBgOne}>
                <div>
                    <p>
                        In the game two players face off against one another, one side playing as "blue", the other as
                        "red" on a 3x3 grid.
                        Each player has five cards in a hand and the aim is to capture the opponent's cards by turning
                        them into the player's own color of red or blue.
                    </p>
                </div>
            </Layout>

            <Layout title='Cards' id='Cards' colorBg='linear-gradient(180deg, rgb(132, 203, 85), rgb(255, 166, 0))'>
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

            <Layout title='How to win' id='HowToWin' urlBg={layoutBgTwo}>
                <div>
                    <p>
                        To win, a majority of the total ten cards played (including the one card that is not placed on
                        the board) must be of the player's card color. To do this, the player must capture cards by
                        placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two
                        cards touch will be compared. If the rank of the opponent's card is higher than the player's
                        card, the player's card will be captured and turned into the opponent's color. If the player's
                        rank is higher, the opponent's card will be captured and changed into the player's color
                        instead
                    </p>
                </div>
            </Layout>
        </div>
    );
}

export default HomePage;