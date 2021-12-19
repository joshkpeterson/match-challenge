import React from 'react';
import { Dropdown, DropdownButton, ButtonToolbar } from 'react-bootstrap';
import styles from './ReportsHeader.module.scss';



export default function ReportsHeader({
  projects,
  gateways,
  onProjectSelect,
  onGatewaySelect,
  selectedProject,
  selectedGateway,
}) {
  console.log(selectedProject)

  return (
    <div className={styles.reportsHeader}>
      <div className={styles.reportsHeader__heading}>
        <h1 className={styles.reportsHeader__heading__mainHeading}>Reports</h1>
        <h2 className={styles.reportsHeader__heading__subHeading}>Easily generate a report of your transactions</h2>
      </div>
      <ButtonToolbar className={styles.reportsHeader__filterToolbar}>
        <DropdownButton
          className={styles.reportsHeader__filterButton}
          title={selectedProject ? projects.find(project => project.projectId === selectedProject).name : 'All Projects'}
          onSelect={onProjectSelect}
        >
          {projects.map(item => {
            return <Dropdown.Item eventKey={item.projectId} key={item.projectId}>{item.name}</Dropdown.Item>;
          })}
        </DropdownButton>
        <DropdownButton
          className={styles.reportsHeader__filterButton}
          title={selectedGateway ? gateways.find(gateway => gateway.gatewayId === selectedGateway).name : 'All Gateways'}
          onSelect={onGatewaySelect}
        >
          {gateways.map(item => {
            return <Dropdown.Item eventKey={item.gatewayId} key={item.gatewayId}>{item.name}</Dropdown.Item>;
          })}
        </DropdownButton>

        <DropdownButton className={styles.reportsHeader__filterButton} title="Dropdown">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className={styles.reportsHeader__filterButton} title="Dropdown">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className={styles.reportsHeader__filterButton} title="Dropdown">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </ButtonToolbar>
    </div>
  )
}
