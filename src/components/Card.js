import { useState } from 'react';

function Card({ frontText, backText, headerText }) {
    const [cardStyle, setCard] = useState({
        display: 'flex',
        position: 'relative',
    });
    const [buttonStyle] = useState({
        position: 'absolute',
        right: '0',
        marginTop: '2%',
        marginRight: '2%',
        width: '30px',
        height: '30px',
    });
    const [frontStyle, setFront] = useState({
        display: 'flex',
    });
    const [backStyle, setBack] = useState({
        display: 'none',
    });
    const [frontIsOpen, setOpen] = useState(true);
    const [bottomText, setBottom] = useState('FRONT');

    function changeView() {
        if (frontIsOpen) {
            setFront({ display: 'flex' });
            setBack({ display: 'none' });
            setBottom('FRONT');
            setOpen(false);
        } else {
            setFront({ display: 'none' });
            setBack({ display: 'flex' });
            setBottom('BACK');
            setOpen(true);
        }
    }

    function deleteCard() {
        setCard({
            display: 'none',
        });
    }

    return (
        <>
            <div style={cardStyle} onClick={changeView} className="flashcard">
                <h2 className="flashcardHeader">{headerText}</h2>
                <button onClick={deleteCard} style={buttonStyle}>
                    X
                </button>
                <p className="flashcardText frontText" style={frontStyle}>
                    {frontText}
                </p>
                <p className="flashcardText backText" style={backStyle}>
                    {backText}
                </p>
                <p className="bottomText">{bottomText}</p>
            </div>
        </>
    );
}

export default Card;
