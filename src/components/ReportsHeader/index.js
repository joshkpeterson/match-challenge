import React from 'react';
import {
  Button,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import styles from './ReportsHeader.module.scss';

export default function ReportsHeader({
  projects,
  gateways,
  onProjectSelect,
  onGatewaySelect,
  selectedProject,
  selectedGateway,
  onSetFilters,
}) {
  return (
    <div className={styles.reportsHeader}>
      <div className={styles.reportsHeader__heading}>
        <h1 className={styles.reportsHeader__heading__mainHeading}>Reports</h1>
        <h2 className={styles.reportsHeader__heading__subHeading}>
          Easily generate a report of your transactions
        </h2>
      </div>
      <ButtonToolbar className={styles.reportsHeader__filterToolbar}>
        <DropdownButton
          className={styles.reportsHeader__filterButton}
          title={selectedProject ? selectedProject.name : 'All Projects'}
          onSelect={onProjectSelect}
        >
          <Dropdown.Item eventKey="">All Projects</Dropdown.Item>
          {projects.map((item) => {
            return (
              <Dropdown.Item eventKey={item.projectId} key={item.projectId}>
                {item.name}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <DropdownButton
          className={styles.reportsHeader__filterButton}
          title={selectedGateway ? selectedGateway.name : 'All Gateways'}
          onSelect={onGatewaySelect}
        >
          <Dropdown.Item eventKey="">All Gateways</Dropdown.Item>
          {gateways.map((item) => {
            return (
              <Dropdown.Item eventKey={item.gatewayId} key={item.gatewayId}>
                {item.name}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>

        <DropdownButton
          className={styles.reportsHeader__filterButton}
          title="Dropdown"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          className={styles.reportsHeader__filterButton}
          title="Dropdown"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>

        <Button variant="secondary" onClick={onSetFilters}>
          Generate Report
        </Button>
      </ButtonToolbar>
    </div>
  );
}
