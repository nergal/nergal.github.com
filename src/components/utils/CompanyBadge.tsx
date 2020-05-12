import React, { FC, useCallback } from "react";
import { Analytics } from "aws-amplify";
import VendorBadge from "./VendorBadge";

type Props = {
  item: ExperienceContent;
};

const CompanyBadge: FC<Props> = ({ item: company }) => {
  const companyString = (
    <span>
      <span className="text-capitalize">{company.companyType}</span>{" "}
      {company.company && ` "${company.company}"`}
    </span>
  );

  const onLinkClick = useCallback(() => {
    Analytics.record({ name: "company.link", value: company.companyUrl });
  }, [company]);

  return (
    <h3>
      {company.companyUrl ? (
        <a target="_blank" rel="noopener noreferrer" href={company.companyUrl}>
          {companyString}
        </a>
      ) : (
        companyString
      )}
      <VendorBadge name={company.vendor} url={company.vendorUrl} />
      <small className="text-capitalize text-muted"> {company.title}</small>
    </h3>
  );
};

export default CompanyBadge;
