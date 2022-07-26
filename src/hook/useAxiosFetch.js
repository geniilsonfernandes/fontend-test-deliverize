import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const getData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await axios(url);
        setData({ ...data.data });
        setError(false);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getData();
  }, [url]);

  return { isLoading, error, data };
};

export default useAxiosFetch;
