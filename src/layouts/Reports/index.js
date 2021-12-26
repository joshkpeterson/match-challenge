import React, { useState, useEffect } from "react";
import ReportsHeader from "components/ReportsHeader";
import ReportsTable from "components/ReportsTable";
import useAxios from "hooks/useAxios";

export default function Reports() {
  const [projectsData, setProjectsData] = useState([]);
  const [gatewaysData, setGatewaysData] = useState([]);
  const [reportsData, setReportsData] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  const [selectedGateway, setSelectedGateway] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const {
    response: projectsResponse,
    projectsLoading,
    projectsError,
  } = useAxios({
    method: "get",
    url: "/projects",
  });

  const {
    response: gatewaysResponse,
    gatewaysLoading,
    gatewaysError,
  } = useAxios({
    method: "get",
    url: "/gateways",
  });
  
  const {
    response: reportsResponse,
    reportsError,
  } = useAxios({
    method: "post",
    url: "/report",
    body: JSON.stringify({}),
    headers: JSON.stringify({
      'Content-Type': 'application/json',
  })
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
      console.log(reportsResponse)
      setReportsData(reportsResponse.data);
    }
  }, [reportsResponse]);

  useEffect(() => {
    console.log(projectsError || gatewaysError || reportsError);
  }, [projectsError, gatewaysError, reportsError]);

  // Currently this filters for all the relevant projects -
  // The next step is to filter all results from /report
  const onSetFilters = () => {
    console.log(selectedProject)
    console.log(selectedGateway)
    console.log(reportsData)
    
    const data = reportsData.filter((project) => {
      const isSelectedProject = selectedProject
        ? selectedProject === project.projectId
        : true;

      const isSelectedGateway = selectedGateway
        ? selectedGateway === project.gatewayId
        : true;

      return isSelectedProject && isSelectedGateway;
    });

    console.log(data)

    setFilteredData(data);
  };

  return (
    <>
      <div>
        <ReportsHeader
          projects={projectsData}
          gateways={gatewaysData}
          onProjectSelect={(projectId) => {
            setSelectedProject(projectId);
          }}
          onGatewaySelect={(gatewayId) => {
            setSelectedGateway(gatewayId);
          }}
          selectedProject={selectedProject}
          selectedGateway={selectedGateway}
          onSetFilters={onSetFilters}
        />
      </div>
      {projectsLoading || gatewaysLoading ? (
        <p>Loading...</p>
      ) : (
        <ReportsTable
          projects={projectsData}
          gateways={gatewaysData}
          filteredData={filteredData}
        />
      )}
    </>
  );
}
