import React, { useState } from "react";
import PropTypes from "prop-types";
import ExtLink from "./ExtLink";

const CustomAccordion = ({ title, author, journal, year, doi, abstract }) => {
  const [accordionStatus, setAccordionStatus] = useState(false);

  const onClicked = () => {
    setAccordionStatus(!accordionStatus);
  };

  return (
    <div className={`accordion ${accordionStatus ? "uncollapsed" : "collapsed"}`}>
      <button onClick={onClicked}>
        <h5>{title}</h5>
        <span class="arrow"></span>
      </button>
      <div className="accordion-panel">
        <ul>
          <li>{author}</li>
          <li>{journal}</li>
          <li>{year}</li>
          <li className="nodot">
            <ExtLink to={doi} />
          </li>
          <li className="nodot">{abstract}</li>
        </ul>
      </div>
    </div>
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
