import React from 'react';

export default function renderGeneral (props) {
    const {name, lastName} = props.data.content;

    return (
        <div className="vcard">
            <h1 className="n fn">
                <span className="given-name">{name}</span>
                <span className="family-name">{lastName}</span>
            </h1>
        </div>
    );
}
