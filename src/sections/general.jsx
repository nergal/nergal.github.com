/*jshint esversion: 6 */
import React from 'react';

export default function renderGeneral (props) {
    const data = props.data;
    return (
        <div className="vcard">
            <h1 className="n fn">
                <span className="given-name">{data.content.name}</span>
                <br />
                <span className="family-name">{data.content.lastName}</span>
            </h1>
        </div>
    );
}
