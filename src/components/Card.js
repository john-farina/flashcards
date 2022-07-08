import { useState } from 'react';

function Card({ frontText, backText, headerText }) {
    const [frontStyle, changeFront] = useState({
        display: 'flex',
    });
    const [backStyle, changeBack] = useState({
        display: 'none',
    });
    const [frontIsOpen, changeOpen] = useState(true);

    function changeView() {
        if (frontIsOpen) {
            changeFront({ display: 'flex' });
            changeBack({ display: 'none' });
            changeOpen(false);
        } else {
            changeFront({ display: 'none' });
            changeBack({ display: 'flex' });
            changeOpen(true);
        }
    }

    return (
        <>
            <div onClick={changeView} className="flashcard">
                <h2 className="flashcardHeader">{headerText}</h2>
                <p className="flashcardText frontText" style={frontStyle}>
                    {frontText}
                </p>
                <p className="flashcardText backText" style={backStyle}>
                    {backText}
                </p>
            </div>
        </>
    );
}

export default Card;
