import React, { FC, ReactNode, useContext } from "react";
import { find } from 'lodash';
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

  for (let definition in definitions) {
    let explanation = find(definitions, {key: definition});

    if (explanation) {
      // useEffect(() => {
      //   Analytics.record({ name: "popover.show", value: definition });
      // }, [definition]);

      results = reactStringReplace(
        results as string,
        definition,
        (match: string, index: number) => (
          <OverlayTrigger
            placement="top"
            overlay={
              <Popover id={`tooltip-${definition}`}>
                <Popover.Title>{definition}</Popover.Title>
                <Popover.Content>{explanation?.value}</Popover.Content>
              </Popover>
            }
            key={`${definition}-${index}`}
          >
            <mark>{match}</mark>
          </OverlayTrigger>
        )
      );
    }
  }

  return <>{results}</>;
};

export default ExperienceRow;
