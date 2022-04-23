import { useState, useEffect } from "react/cjs/react.development";

export const useCountry = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const getData = (url) => {
    useEffect(async () => {
      setIsLoading(true);
      try {
        setIsError(false);
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
          setIsError(true);
        }
        setData(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }, [url]);
  };

  return {
    getData,
    isLoading,
    isError,
    data,
  };
};
