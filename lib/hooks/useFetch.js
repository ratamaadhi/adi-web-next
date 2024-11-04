import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchAPI } from '../api';

function useFetch(endPoint, timeout = 5000) {
  const [data, setData] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let isMounted = true;

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const callApi = async () => {
      setLoading(true);
      try {
        const res = await fetchAPI(endPoint, {
          cancelToken: cancelToken.token,
          timeout: timeout,
        });
        setData(res);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setData('');
        setLoading(false);
      }
    };

    callApi();

    function cleanup() {
      if (!isMounted) {
        console.log('clean up function');
        cancelToken.cancel();
      }
      isMounted = false;
    }

    return cleanup;
  }, [endPoint, timeout]);

  return { data, isLoading, error };
}
export default useFetch;
