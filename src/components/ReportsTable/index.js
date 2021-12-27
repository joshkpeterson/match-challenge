import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styles from './ReportsTable.module.scss';

export default function ReportsTable({ selectedProject, selectedGateway, projects, gateways, filteredData }) {
  // console.log(filteredData)
  return (
    <div className={styles.reportsTable}>
      {!!filteredData && <>

      <p className={styles.reportsTable__heading}>
      {selectedProject ? `${selectedProject.name}` : 'All Projects'} | {selectedGateway ? `${selectedGateway.name}` : 'All Gateways'}
      </p>
      
      <Accordion defaultActiveKey="0" flush>
        {filteredData.map((item, index) => (
          <Accordion.Item eventKey={index} key={item.id}>
            <Accordion.Header>{item.name}</Accordion.Header>
            <Accordion.Body>
              <table className={styles.reportsTable__table}>
                <tr>
                  <th>Date</th>
                  <th>Transaction ID</th>
                  <th>Amount</th>
                </tr>
                {console.log(item)}
                {item.transactions.map(transaction => (
                  <tr key={transaction.paymendId}>
                    <td data-th="Date">{transaction.created}</td>
                    <td data-th="Transaction ID">{transaction.paymentId.substr(-5)}</td>
                    <td data-th="Amount">{transaction.amount}</td>
                  </tr>
                ))}

              </table>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      </>
      }

      
    </div>
    )
  }
  