import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? " active" : "";
    const hidden = index === activeIndex ? "active" : "hidden";

    return (
      <React.Fragment key={item.title}>
        <div className={`title${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div>
          <div className={`content${active}`}>
            <p className={`transition ${hidden}`}>{item.content}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
