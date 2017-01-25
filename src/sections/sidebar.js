import React from 'react';
import {Row, Col} from 'react-bootstrap';

export default function renderSidebar (props) {
    const data = props.data;
    const links = (data.content.links || []);
    const colWidth = Math.floor(12 / links.length);

    return (
        <Row style={{height: (colWidth * 18) + 'px'}} className="iconset">
            {links.map((link, index) =>
                <Col xs={colWidth} className="text-center" key={index}>
                    <a className={`icon ${link.cssClass}`} href={link.linkUrl} alt={link.link}>{link.title}</a>
                </Col>
            )}
        </Row>
    );
};