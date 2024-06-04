import React from 'react';

export default function TextForm(props) {
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="container">
                <div className="mb-3">
                    <textarea className="form-control" id="MyBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary">Convert to Uppercase</button>
            </div>
        </div>
    );
}
