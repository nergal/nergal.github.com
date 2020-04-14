import React, { FC, ReactNode } from "react";
// import { Popover, OverlayTrigger } from "react-bootstrap";
// import reactStringReplace from "react-string-replace";

type Props = {
  content: ReactNode;
};

const ExperienceRow: FC<Props> = ({ content }) => {
//   const listItems: string[] = [];
//   let str = content;

//   for (let item in listItems) {
//     let value = listItems[item];
//     const overlay = (
//       <Popover title={item} id={`tooltip-${item}`}>
//         {value}
//       </Popover>
//     );

//     str = reactStringReplace(str, item, (match, index) => (
//       <OverlayTrigger
//         placement="top"
//         overlay={overlay}
//         key={`${item}-${index}`}
//       >
//         <mark>{match}</mark>
//       </OverlayTrigger>
//     ));
//   }

  return <>{content}</>;
};

export default ExperienceRow;
