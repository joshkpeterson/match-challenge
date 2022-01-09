import React, { useState, useEffect } from 'react';
import ReportsHeader from 'components/ReportsHeader';
import ReportsTable from 'components/ReportsTable';
import ReportsChart from 'components/ReportsChart';
import useAxios from 'hooks/useAxios';
import styles from './Reports.module.scss';

export default function Reports() {
  const [projectsData, setProjectsData] = useState([]);
  const [gatewaysData, setGatewaysData] = useState([]);
  const [reportsData, setReportsData] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  const [selectedGateway, setSelectedGateway] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedProjectSubmitted, setSelectedProjectSubmitted] = useState();
  const [selectedGatewaySubmitted, setSelectedGatewaySubmitted] = useState();
  const [totalAll, setTotalAll] = useState(0);

  const {
    response: projectsResponse,
    projectsError,
  } = useAxios({
    method: 'get',
    url: '/projects',
  });

  const {
    response: gatewaysResponse,
    gatewaysError,
  } = useAxios({
    method: 'get',
    url: '/gateways',
  });

  const { response: reportsResponse, reportsError } = useAxios({
    method: 'post',
    url: '/report',
    body: JSON.stringify({}),
    headers: JSON.stringify({
      'Content-Type': 'application/json',
    }),
  });

  useEffect(() => {
    if (projectsResponse != null) {
      setProjectsData(projectsResponse.data);
    }
  }, [projectsResponse]);

  useEffect(() => {
    if (gatewaysResponse != null) {
      setGatewaysData(gatewaysResponse.data);
    }
  }, [gatewaysResponse]);

  useEffect(() => {
    if (reportsResponse != null) {
      console.log(reportsResponse);
      setReportsData(reportsResponse.data);
    }
  }, [reportsResponse]);

  useEffect(() => {
    console.log(projectsError || gatewaysError || reportsError);
  }, [projectsError, gatewaysError, reportsError]);

  /*
   *   When Generate Report button is clicked,
   *   all reports are filtered according to current selections
   *   and then sorted according to project/gateway and
   *   transaction date.
   */
  const onSetFilters = () => {
    // When All Gateways + 1 Project selected, results are grouped by
    // Gateway. For all others, they are grouped by Project.
    const isGroupedByProject = !(selectedProject && !selectedGateway);
    const groupedData = {};

    setSelectedProjectSubmitted(selectedProject);
    setSelectedGatewaySubmitted(selectedGateway);

    // Todo: this works, but could be refactored to functional style with a map
    reportsData.forEach((transaction) => {
      const id = isGroupedByProject
        ? transaction.projectId
        : transaction.gatewayId;

      const isSelectedProject = selectedProject
        ? selectedProject.id === transaction.projectId
        : true;

      const isSelectedGateway = selectedGateway
        ? selectedGateway.id === transaction.gatewayId
        : true;

      if (isSelectedProject && isSelectedGateway) {
        if (groupedData[id]) {
          groupedData[id].transactions.push(transaction);
          groupedData[id].total = +(
            groupedData[id].total + transaction.amount
          ).toFixed(2);
        } else {
          groupedData[id] = {
            id,
            name: isGroupedByProject
              ? projectsData.find((project) => project.projectId === id).name
              : gatewaysData.find((gateway) => gateway.gatewayId === id)?.name,
            total: transaction.amount,
            transactions: [transaction],
          };
        }
      }
    });

    // Sort top-level Projects or Gateways by alphabetical order.
    const sortedData = Object.values(groupedData);
    sortedData.sort((a, b) => a.name.localeCompare(b.name));

    // Sort nested transactions by date created, ascending.
    // While iterating, calculate total for all items.
    const { compare } = Intl.Collator('en-US');
    let total = 0;
    sortedData.forEach((item) => {
      item.transactions.sort((a, b) => compare(a.created, b.created));
      total += item.total;
    });

    setFilteredData(sortedData);
    setTotalAll(total);
  };

  return (
    <>
      <div className={styles.reports}>
        <ReportsHeader
          projects={projectsData}
          gateways={gatewaysData}
          onProjectSelect={(id) => {
            setSelectedProject(
              id && {
                id,
                name: projectsData.find((project) => project.projectId === id)
                  .name,
              },
            );
          }}
          onGatewaySelect={(id) => {
            setSelectedGateway(
              id && {
                id,
                name: gatewaysData.find((gateway) => gateway.gatewayId === id)
                  ?.name,
              },
            );
          }}
          selectedProject={selectedProject}
          selectedGateway={selectedGateway}
          onSetFilters={onSetFilters}
        />
      {!filteredData.length ? (
        <div className={styles.reports__placeholder}>
          <div className={styles.reports__placeholder__heading}>No Reports</div>
          <div className={styles.reports__placeholder__text}>Currently you have no data for the reports to be generated. Once you start generating traffic through the Balance application the reports will be shown.</div>
          <img src="/img/no-reports-graphic.svg" className={styles.reports__placeholder__image} alt="Placeholder graphic for no reports generated"/>
        </div>
      ) : (
        <div className={styles.reports__innerContainer}>
          <ReportsTable
            selectedProject={selectedProjectSubmitted}
            selectedGateway={selectedGatewaySubmitted}
            projects={projectsData}
            gateways={gatewaysData}
            filteredData={filteredData}
            totalAll={totalAll}
          />
          {((!selectedProjectSubmitted && selectedGatewaySubmitted) ||
            (selectedProjectSubmitted && !selectedGatewaySubmitted)) && (
            <ReportsChart filteredData={filteredData} totalAll={totalAll} />
          )}
        </div>
      )}
      </div>
    </>
  );
}
