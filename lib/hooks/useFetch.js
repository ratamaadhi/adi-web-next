import { useEffect, useState } from "react";
import { fetchAPI } from "../api";

function useFetch(endPoint) {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const callApi = async () => {
    const res = await fetchAPI(endPoint);
    setLoading(false);
    setData(res);
  };

  useEffect(() => {
    callApi()
  }, []);

  return { data, isLoading };
}

export default useFetch;
