import React, { useState, useEffect } from 'react';
import ReportsHeader from 'components/ReportsHeader';
import ReportsTable from 'components/ReportsTable';
import useAxios from 'hooks/useAxios';

export default function Reports() {
  const [projectsData, setProjectsData] = useState([]);
  const [gatewaysData, setGatewaysData] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  const [selectedGateway, setSelectedGateway] = useState();



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

  // const onProjectSelect

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
        />
      </div>
      {(projectsLoading || gatewaysLoading) ? (
        <p>Loading...</p>
      ) : (
        <ReportsTable 
          projects={projectsData}
          gateways={gatewaysData}
        />
      )}
    </>
  )
}
