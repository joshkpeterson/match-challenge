import React, { useState, useEffect } from 'react';
import ReportsHeader from 'components/ReportsHeader';
import ReportsTable from 'components/ReportsTable';
import useAxios from 'hooks/useAxios';

export default function Reports() {
  const [projectsData, setProjectsData] = useState([]);
  const [gatewaysData, setGatewaysData] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  const [selectedGateway, setSelectedGateway] = useState();
  const [filteredData, setFilteredData] = useState([]);


  const { response: projectsResponse, projectsLoading, projectsError } = useAxios({
    method: 'get',
    url: '/projects',
  });

  const { response: gatewaysResponse, gatewaysLoading, gatewaysError } = useAxios({
    method: 'get',
    url: '/gateways',
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
    console.log(projectsError || gatewaysError)
  }, [projectsError, gatewaysError]);


  const onSetFilters = () => {
    const data = projectsData.filter(project => {
      const isSelectedProject = selectedProject ? (selectedProject === project.projectId) : true;

      const isSelectedGateway = selectedGateway ? project.gatewayIds.includes(selectedGateway) : true;

      return (isSelectedProject && isSelectedGateway);
    })

    setFilteredData(data);
  }

  return (
    <>
      <div>
        <ReportsHeader
          projects={projectsData}
          gateways={gatewaysData}
          onProjectSelect={(projectId) => {setSelectedProject(projectId)}}
          onGatewaySelect={(gatewayId) => {setSelectedGateway(gatewayId)}}
          selectedProject={selectedProject}
          selectedGateway={selectedGateway}
          onSetFilters={onSetFilters}
        />
      </div>
      {(projectsLoading || gatewaysLoading) ? (
        <p>Loading...</p>
      ) : (
        <ReportsTable
          projects={projectsData}
          gateways={gatewaysData}
          filteredData={filteredData}
        />
      )}
    </>
  )
}
