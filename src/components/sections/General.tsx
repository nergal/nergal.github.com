import React, { FC } from "react";

const General: FC<DataProps<GeneralContent>> = ({
  content: { name, lastName },
}) => (
  <div className="vcard">
    <h1 className="n fn">
      <span className="given-name">{name}</span>
      <span className="family-name">{lastName}</span>
    </h1>
  </div>
);

export default General;
