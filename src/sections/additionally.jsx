/*jshint esversion: 6 */
import React, {Component} from 'react';

export default function RenderAdditionally (props) {
    return (
        <section>
            <h3>{props.data.header}</h3>
            <ul>
                {props.data.content.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </section>
    );
}
