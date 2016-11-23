/*jshint esversion: 6 */
import React from 'react';

export default function renderSidebar (props) {
    const data = props.data;
    return (
        <div className="row">
            {(data.content.links || []).map((link, index) =>
                <div className="col-xs-4 text-center" key={index}>
                    <a className={`icon ${link.cssClass}`} href={link.linkUrl} alt={link.link}>{link.title}</a>
                </div>
            )}
        </div>
    );
}
