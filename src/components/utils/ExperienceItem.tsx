import React, { FC } from "react";
import { Badge } from "react-bootstrap";
import CompanyBadge from "./CompanyBadge";
import ExperienceRow from "./ExperienceRow";

type Props = {
  item: ExperienceContent;
};

const dateTimeFormat = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "short",
});

const ExperienceItem: FC<Props> = ({ item }) => (
  <article>
    <CompanyBadge item={item} />
    <Badge pill variant="secondary" className="float-right">
      {[item.startDate, item.endDate]
        .map((x) => new Date(x))
        .map((date) => (date.getTime() ? dateTimeFormat.format(date) : "now"))
        .join(" - ")}
    </Badge>

    <h4>{item.location.length > 0 && item.location.join(" / ")}</h4>

    <ul>
      {item.responsibilities.map((row, index) => (
        <li key={index}>
          <ExperienceRow content={row} />
        </li>
      ))}
    </ul>
  </article>
);

export default ExperienceItem;
