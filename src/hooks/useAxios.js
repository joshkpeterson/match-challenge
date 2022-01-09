import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { baseURL } from 'constants';

axios.defaults.baseURL = baseURL;

const useAxios = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = useCallback(() => {
    axios[method](url, JSON.parse(body), JSON.parse(headers))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, [body, headers, method, url]);

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers, fetchData]);

  return { response, error, loading };
};

export default useAxios;
