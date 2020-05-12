import React, { FC, ReactNode, useContext } from "react";
import DefinitionContext from "../DefinitionContext";
import { OverlayTrigger } from "react-bootstrap";
import reactStringReplace from "react-string-replace";
import AnalyticsPopover from "./AnalyticsPopover";

type Props = {
  content: ReactNode;
};

const ExperienceRow: FC<Props> = ({ content }) => {
  const definitions = useContext(DefinitionContext);
  let results = content;

  for (let definition in definitions) {
    let explanation = definitions[definition];

    results = reactStringReplace(
      results as string,
      definition,
      (match: string, index: number) => (
        <OverlayTrigger
          placement="top"
          overlay={
            <AnalyticsPopover
              definition={definition}
              explanation={explanation}
            />
          }
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
