import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="container">
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick = {handleUpClick}>Convert to Uppercase</button>
                <span style={{ margin: '0 5px' }}></span>
                <button className="btn btn-primary" onClick = {handleLowClick}>Convert to Lowercase</button>
            </div>
        </div>
    );
}
