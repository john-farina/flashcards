import { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
    const [cards, changeCards] = useState([
        {
            id: 1,
            front: 'hello this is some text',
            back: 'this is text for the back, this is text for the back, this is text for the back, this is text for the back , this is text for the back , ',
        },
        {
            id: 2,
            front: 'more text seconds card',
            back: 'back 2nds card',
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
                return <Card frontText={card.front} backText={card.back} />;
            })}
            <button onClick={addNewCard}>click</button>
        </div>
    );
}

export default App;
