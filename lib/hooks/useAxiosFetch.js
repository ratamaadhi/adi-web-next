import axios from 'axios';
import { useEffect, useState } from 'react';

function useAxiosFetch(url = '', options = {}) {
  const [data, setData] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let isMounted = true;

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const fetching = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url, {
          ...options,
          cancelToken: cancelToken.token,
        });
        setData(res.data);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetching();

    function cleanup() {
      if (!isMounted) {
        console.log('clean up function');
        cancelToken.cancel();
      }
      isMounted = false;
    }
    return cleanup;
  }, [url]);

  return { data, isLoading, error };
}

export default useAxiosFetch;
