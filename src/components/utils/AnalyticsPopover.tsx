import React, { FunctionComponent, useEffect } from "react";
import { Analytics } from "aws-amplify";
import { Popover } from "react-bootstrap";

type Props = {
  definition: string;
  explanation: string;
};

const AnalyticsPopover: FunctionComponent<Props> = React.forwardRef(
  ({ definition, explanation }) => {
    useEffect(() => {
      Analytics.record({ name: "popover.show", value: definition });
    }, [definition]);

    return (
      <Popover id={`tooltip-${definition}`}>
        <Popover.Title>{definition}</Popover.Title>
        <Popover.Content>{explanation}</Popover.Content>
      </Popover>
    );
  }
);

export default AnalyticsPopover;
