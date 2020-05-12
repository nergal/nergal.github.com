import React, { FC, useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { Analytics } from "aws-amplify";

const Sidebar: FC<DataProps<SidebarContent>> = ({
  content: { links = [] },
}) => {
  const colWidth = Math.floor(12 / links.length);

  const onLinkClick = useCallback(
    (value: string) => () => {
      Analytics.record({ name: "sidebar.link", value });
    },
    []
  );

  return (
    <Row style={{ height: colWidth * 18 + "px" }} className="iconset">
      {links.map((link, index) => (
        <Col xs={colWidth} className="text-center" key={index}>
          <a
            className={`icon ${link.cssClass}`}
            onClick={onLinkClick(link.linkUrl)}
            href={link.linkUrl}
          >
            {link.title}
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default Sidebar;
