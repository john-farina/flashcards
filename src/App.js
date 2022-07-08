import { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
    const [cards, changeCards] = useState([
        {
            id: 1,
            header: 'Index Cards by: jf',
            front: 'welcome, just click on an index card to flip it',
            back: 'wow such a genius and riveting idea i bet no one else could make such a hard web application',
        },
        {
            id: 2,
            header: 'Another Card?!',
            front: 'more then one card?',
            back: 'this app must be made by the smartest person alive',
        },
    ]);

    function addNewCard() {
        const front = prompt('front card');
        const back = prompt('back card');
        changeCards((old) => [...old, { front: front, back: back }]);
    }

    return (
        <div className="App">
            {cards.map((card) => {
                return (
                    <Card
                        key={card.id}
                        headerText={card.header}
                        frontText={card.front}
                        backText={card.back}
                    />
                );
            })}
            <button onClick={addNewCard}>click</button>
        </div>
    );
}

export default App;
