import React from 'react';
import { Dropdown, DropdownButton, ButtonToolbar } from 'react-bootstrap';
import styles from './ReportsHeader.module.scss';



export default function ReportsHeader() {
  return (
    <div className={styles.reportsHeader}>
      <ButtonToolbar className={styles.reportsHeader__buttonToolbar}>
        <DropdownButton className={styles.reportsHeader__filterButton} title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className={styles.reportsHeader__filterButton} title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className={styles.reportsHeader__filterButton} title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className={styles.reportsHeader__filterButton} title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className={styles.reportsHeader__filterButton} title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </ButtonToolbar>
    </div>
  )
}
