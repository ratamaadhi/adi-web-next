import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchAPI } from '../api';

function useFetch(endPoint) {
  const [data, setData] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [isMounted, setUnmounted] = useState(true);
  let isMounted = true;

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const callApi = async () => {
      setLoading(true);
      try {
        const res = await fetchAPI(endPoint, {
          cancelToken: cancelToken.token,
        });
        if (isMounted) {
          setData(res);
          setError(null);
        }
        setLoading(false);
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          setData('');
        }
        setLoading(false);
      }
    };

    callApi();

    function cleanup() {
      console.log('clean up function');
      // setUnmounted(false);
      isMounted = false;
      cancelToken.cancel();
    }

    return cleanup;
  }, [endPoint]);

  return { data, isLoading, error };
}

export default useFetch;
