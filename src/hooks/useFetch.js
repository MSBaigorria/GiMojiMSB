import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getFetch();
  }, [url]);

    const getFetch = async () => {
    const resp = await fetch(url);
    const { data } = await resp.json();
    setDataFetch(data);
    setIsLoading(false);
  };

  return {
    data: dataFetch,
    isLoading
  };
};
