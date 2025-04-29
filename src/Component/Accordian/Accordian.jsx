// import React from 'react'
import './Accordian.css'

import React, { useState } from 'react';

// Individual Accordion Item Component
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

// Main Accordion Component
const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { title: 'Accordion 1', content: 'Content of Accordion 1' },
    { title: 'Accordion 2', content: 'Content of Accordion 2' },
    { title: 'Accordion 3', content: 'Content of Accordion 3' },
  ];

  const handleClick = (index) => {
    // If the clicked accordion is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

// export default Accordion;


export default Accordian