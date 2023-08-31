import React, { useEffect, useState } from "react";

const useAxios = (url) => {
  const [dataAxios, setDataAxios] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAxios();
  }, [url]);

  const getAxios = async () => {
    const categData = await axiosGiphy.get(url);
    const { data } = categData;
    setDataAxios(data.data);
    setLoading(false);
  };

  return {
    data: dataAxios,
    loading
  };
};
