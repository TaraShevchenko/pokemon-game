import '../../App.css';
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import layoutBgOne from "../../assets/background3.jpg"
import layoutBgTwo from "../../assets/background2.jpg"

const HomePage = () => {

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
                    To win, a majority of the total ten cards played (including the one card that is not placed on
                    the board) must be of the player's card color. To do this, the player must capture cards by
                    placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two
                    cards touch will be compared. If the rank of the opponent's card is higher than the player's
                    card, the player's card will be captured and turned into the opponent's color. If the player's
                    rank is higher, the opponent's card will be captured and changed into the player's color
                    instead
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