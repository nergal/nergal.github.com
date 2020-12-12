import React, { FC, ReactNode, useContext } from "react";
import { find } from "lodash";
import { OverlayTrigger, Popover } from "react-bootstrap";
import reactStringReplace from "react-string-replace";
// import { Analytics } from "aws-amplify";
import DefinitionContext from "../DefinitionContext";

type Props = {
  content: ReactNode;
};

const ExperienceRow: FC<Props> = ({ content }) => {
  const definitions = useContext(DefinitionContext);
  let results = content;

  for (let definition of definitions) {
    // useEffect(() => {
    //   Analytics.record({ name: "popover.show", value: definition });
    // }, [definition]);

    results = reactStringReplace(
      results as string,
      definition.key,
      (match: string, index: number) => (
        <OverlayTrigger
          placement="top"
          overlay={
            <Popover id={`tooltip-${definition.id}`}>
              <Popover.Title>{definition.key}</Popover.Title>
              <Popover.Content>{definition.value}</Popover.Content>
            </Popover>
          }
          key={`${definition.id}-${index}`}
        >
          <mark>{match}</mark>
        </OverlayTrigger>
      )
    );
  }

  return <>{results}</>;
};

export default ExperienceRow;
