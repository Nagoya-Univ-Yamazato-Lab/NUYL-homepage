import React, { useState } from "react";
import PropTypes from "prop-types";
import ExtLink from "./ExtLink";

const CustomAccordion = ({ title, author, journal, published, doi, abstract, year }) => {
  const [accordionStatus, setAccordionStatus] = useState(false);

  const onClicked = () => {
    setAccordionStatus(!accordionStatus);
  };

  return (
    (
    year
        ? (<h1>{year}</h1>)
        : (<div className={`accordion ${accordionStatus ? "uncollapsed" : "collapsed"}`}>
      <button onClick={onClicked}>
        {title}
        <span class="arrow"></span>
      </button>
      <div className="accordion-panel">
        <ul>
          <li>{author}</li>
          <li>{journal}</li>
          <li>{published}</li>
          { doi && <li><ExtLink to={doi} /><br /></li> }
          { abstract && <li>{abstract}<br /></li>}
        </ul>
      </div>
    </div>
  ))
  );
};

export default CustomAccordion;

CustomAccordion.propTypes = {
  title: PropTypes.object,
  author: PropTypes.object,
  journal: PropTypes.object,
  year: PropTypes.object,
  doi: PropTypes.object,
  abstract: PropTypes.object,
};
