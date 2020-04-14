import React, { FC } from "react";

type Props = {
  name: string;
  url?: string;
};

const VendorBadge: FC<Props> = ({ name, url }) => {
  if (!name) return null;
  if (url)
    return (
      <span className="vendor">
        (at{" "}
        <a target="_blank" rel="noopener noreferrer" href={url}>
          {name}
        </a>
        )
      </span>
    );
  return <span className="vendor">(at {name})</span>;
};

export default VendorBadge;
