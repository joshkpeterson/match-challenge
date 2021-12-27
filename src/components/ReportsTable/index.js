import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styles from './ReportsTable.module.scss';

export default function ReportsTable({
  selectedProject,
  selectedGateway,
  projects,
  gateways,
  filteredData,
}) {
  console.log(filteredData);

  const ResultsTable = (transactions) => (
    <table className={styles.reportsTable__table}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Transaction ID</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ paymentId, created, amount }) => (
          <tr key={paymentId}>
            <td data-th="Date">{created}</td>
            <td data-th="Transaction ID">{paymentId.substr(-5)}</td>
            <td data-th="Amount">{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const Results = () => {
    if (selectedProject && selectedGateway && filteredData.length === 1) {
      const { name, total, transactions } = filteredData[0];
      return <>{ResultsTable(transactions)}</>;
    } else {
      return (
        <Accordion defaultActiveKey="0" flush>
          {filteredData.map(({ id, name, transactions }, index) => (
            <Accordion.Item eventKey={index} key={id}>
              <Accordion.Header>{name}</Accordion.Header>
              <Accordion.Body>{ResultsTable(transactions)}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      );
    }
  };

  return (
    <div className={styles.reportsTable}>
      {!!filteredData && (
        <>
          <p className={styles.reportsTable__heading}>
            {selectedProject ? `${selectedProject.name}` : 'All Projects'} |{' '}
            {selectedGateway ? `${selectedGateway.name}` : 'All Gateways'}
          </p>
          {Results()}
        </>
      )}
    </div>
  );
}
