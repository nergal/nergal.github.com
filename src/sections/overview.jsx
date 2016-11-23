/*jshint esversion: 6 */
import React from 'react';

export default function RenderOverview (props) {
    const items = props.data.content
        .sort((item) => item.order)
        .reverse();

    return (
        <section>
            <dl className="dl-horizontal">
                {items.map(item =>
                    [
                        <dt>{item.title}</dt>,
                        <dd>{item.value.join(', ')}</dd>
                    ]
                )}
            </dl>
        </section>
    );
}
