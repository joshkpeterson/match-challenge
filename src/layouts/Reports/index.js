import React, { useState, useEffect } from 'react';
import ReportsHeader from 'components/ReportsHeader';
import ReportsTable from 'components/ReportsTable';
import useAxios from 'hooks/useAxios';

export default function Reports() {
  const [data, setData] = useState([]);

  const { response, loading, error } = useAxios({
    method: 'get',
    url: '/projects',
  });

  useEffect(() => {
    if (response !== null) {
      console.log(response.data)
      setData(response.data);
    }
  }, [response]);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
    }
  }, [error]);


  return (
    <>
      <div>
        <ReportsHeader 
          projects={data} 
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ReportsTable 
          projects={data} 
        />
      )}
    </>
  )
}
