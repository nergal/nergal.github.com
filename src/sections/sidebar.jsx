/*jshint esversion: 6 */
import React from 'react';

export default function renderSidebar (props) {
    const data = props.data;
    return (
        <div className="iconset">
            {(data.content.links || []).map((link, index) =>
                <a key={index} className={`icon ${link.cssClass}`} href={link.linkUrl} alt={link.link}>{link.title}</a>
            )}
        </div>
    );
}
