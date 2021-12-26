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

            {filteredData && ' / has filtered data'}
        </div>
    )
}
