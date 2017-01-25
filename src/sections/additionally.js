import React from 'react';

export default function RenderAdditionally (props) {
    const {header, content} = props.data;

    return (
        <section>
            <h3>{header}</h3>
            <ul>
                {React.Children.map(content, (item, index) => <li key={index}>{item}</li>)}
            </ul>
        </section>
    );
}
