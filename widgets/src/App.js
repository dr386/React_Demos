import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "frontend framework",
  },
  {
    title: "How is React?",
    content: "frontend framework",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
