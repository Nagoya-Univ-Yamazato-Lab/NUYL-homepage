import React, { useState, useStaticQuery, graphql  } from "react";
// import "../../components/global.sass";
import "../../components/accordion.sass";
// import CustomAccordion from "@components/accordion";
// import "../../../components/_accordion";
// import CustomAccordion from "../../../components/accordion";
// import "../../components/all";
// import Layout from '../components/Layout'
// import SeO from '../components/seo'
import ExtLink from '../../components/ExtLink'
import CustomAccordion from "../../components/accordion";

export default function Publications() {
  const data = useStaticQuery(graphql`
    query PubllicationsQuery {

      allResearchCsv {
        nodes {
          field1
          field2
          field3
          field4
          field5
          field6
          id
        }
      }
    }
  `)




// const accordionData2 = [
//   {data.allResearchCsv.nodes.map((node) => (
//     <li key={node.id}>
//       <h5>{node.field2}</h5>
//       <ul>
//         <li>{node.field1}</li>
//         <li>{node.field3}</li>
//         <li>{node.field5}</li>
//         <li className="nodot">
//           <ExtLink to={node.field6} />
//         </li>
//         <li className="nodot">{node.field4}</li>
//       </ul>
//     </li>
//   ))}
// ];

const accordionData = [
  {
    title: <>Accordion 1</>,
    content: (
      <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </>
    ),
  },
  {
    title: <>Accordion 2</>,
    content: (
      <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </>
    ),
  },
  {
    title: <>Accordion 3</>,
    content: (
      <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </>
    ),
  },
];

// const IndexPage = () => {
  return (
    <main>
      <header>
        <h1>Gatsby Custom Accordion</h1>
        <h3>By: Code And Play</h3>
      </header>

      {/* <section>{accordionData && accordionData.map((data, i) => <CustomAccordion key={i} title={data.title} content={data.content} />)}</section> */}

      <ul>
                  {data.allResearchCsv.nodes.map((node) => (
                    <li key={node.id}>
                      <h5>{node.field2}</h5>
                      <ul>
                        <li>{node.field1}</li>
                        <li>{node.field3}</li>
                        <li>{node.field5}</li>
                        <li className="nodot">
                          <ExtLink to={node.field6} />
                        </li>
                        <li className="nodot">{node.field4}</li>
                      </ul>
                    </li>
                  ))}
                </ul>

    </main>
  );
// };

// export default IndexPage;

// export const Head = () => <title>Gatsby Custom Accordion</title>;

}
