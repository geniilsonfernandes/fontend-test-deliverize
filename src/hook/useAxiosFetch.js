import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (https) => {
  const [url, setUrl] = useState(https);
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

  const getDataByUrl = (value) => {
    setUrl(value);
  };

  return { isLoading, error, data, getDataByUrl };
};

export default useAxiosFetch;
