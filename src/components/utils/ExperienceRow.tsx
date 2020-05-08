import React, { FC, ReactNode, useContext } from "react";
import DefinitionContext from "../DefinitionContext";
import { Popover, OverlayTrigger } from "react-bootstrap";
import reactStringReplace from "react-string-replace";

type Props = {
  content: ReactNode;
};

const ExperienceRow: FC<Props> = ({ content }) => {
  const definitions = useContext(DefinitionContext);
  let results = content;

  for (let definition in definitions) {
    let explanation = definitions[definition];
    const overlay = (
      <Popover id={`tooltip-${definition}`}>
        <Popover.Title>{definition}</Popover.Title>
        <Popover.Content>{explanation}</Popover.Content>
      </Popover>
    );

    results = reactStringReplace(
      results as string,
      definition,
      (match: string, index: number) => (
        <OverlayTrigger
          placement="top"
          overlay={overlay}
          key={`${definition}-${index}`}
        >
          <mark>{match}</mark>
        </OverlayTrigger>
      )
    );
  }

  return <>{results}</>;
};

export default ExperienceRow;
