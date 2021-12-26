import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styles from './ReportsTable.module.scss';

export default function ReportsTable({ selectedProject, selectedGateway, projects, gateways, filteredData }) {
  // console.log(filteredData)
  return (
    <div className={styles.reportsTable}>
      <p className={styles.reportsTable__heading}>
      {selectedProject ? `${selectedProject.name}` : 'All Projects'} | {selectedGateway ? `${selectedGateway.name}` : 'All Gateways'}
      </p>
      
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
        </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
    </div>
    )
  }
  