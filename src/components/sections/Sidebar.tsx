import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";

const Sidebar: FC<DataProps<SidebarContent>> = ({
  content: { links = [] },
}) => {
  const colWidth = Math.floor(12 / links.length);

  return (
    <Row style={{ height: colWidth * 18 + "px" }} className="iconset">
      {links.map((link, index) => (
        <Col xs={colWidth} className="text-center" key={index}>
          <a className={`icon ${link.cssClass}`} href={link.linkUrl}>
            {link.title}
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default Sidebar;
