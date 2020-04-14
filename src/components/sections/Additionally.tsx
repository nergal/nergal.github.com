import React, { FC } from "react";

const Additionally: FC<DataProps<string[]>> = ({ header, content = [] }) => (
  <section>
    <h3>{header}</h3>
    <ul>
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </section>
);

export default Additionally;
