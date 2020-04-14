import React, { FC } from "react";
import { sortBy } from "lodash";
import ExperienceItem from "../utils/ExperienceItem";

const Experience: FC<DataProps<ExperienceContent[]>> = ({ content }) => (
  <section>
    {sortBy(content, (item) => new Date(item.startDate).getTime())
      .reverse()
      .map((item, index) => (
        <ExperienceItem key={index} item={item} />
      ))}
  </section>
);

export default Experience;
