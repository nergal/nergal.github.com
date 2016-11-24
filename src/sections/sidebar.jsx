/*jshint esversion: 6 */
import React, {Component} from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default function renderSidebar (props) {
    const data = props.data;
    const links = (data.content.links || []);
    const colWidth = Math.floor(12 / links.length);

    return (
        <Row>
            {links.map((link, index) =>
                <Col xs={colWidth} className="text-center" key={index}>
                    <a className={`icon ${link.cssClass}`} href={link.linkUrl} alt={link.link}>{link.title}</a>
                </Col>
            )}
        </Row>
    );
};
