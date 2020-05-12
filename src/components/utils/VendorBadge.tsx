import React, { FC, useCallback } from "react";
import { Analytics } from "aws-amplify";

type Props = {
  name: string;
  url?: string;
};

const VendorBadge: FC<Props> = ({ name, url }) => {
  const onLinkClick = useCallback(() => {
    Analytics.record({ name: "vendor.link", value: url });
  }, [url]);

  if (!name) return null;

  if (url) {
    return (
      <span className="vendor">
        (at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={onLinkClick}
          href={url}
        >
          {name}
        </a>
        )
      </span>
    );
  }
  return <span className="vendor">(at {name})</span>;
};

export default VendorBadge;
