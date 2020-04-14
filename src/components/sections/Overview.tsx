import React, { FC } from "react";
import { sortBy } from "lodash";

const Overview: FC<DataProps<OverviewContent[]>> = ({ content }) => (
  <section>
    <dl className="row">
      {sortBy(content, "order").map((item, index) => [
        <dt className="col-sm-3 mb-0 text-right" key={index}>{item.title}</dt>,
        <dd className="col-sm-9 mb-0">{item.value.join(", ")}</dd>,
      ])}
    </dl>
  </section>
);

export default Overview;
