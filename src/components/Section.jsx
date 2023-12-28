import React from "react";

const Section = ({ title, children, id }) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
