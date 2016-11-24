/*jshint esversion: 6 */
import React, {Component} from 'react';
import _ from 'lodash';

export default function RenderOverview (props) {
    const items = _.sortBy(props.data.content, 'order');

    return (
        <section>
            <dl className="dl-horizontal">
                {items.map((item, index) =>
                    [
                        <dt key={index}>{item.title}</dt>,
                        <dd>{item.value.join(', ')}</dd>
                    ]
                )}
            </dl>
        </section>
    );
}
