import axios from "axios";
import { useState, useEffect } from "react";
import { RAPID_API_KEY } from "@env";
const useFetch = ({ endpoint, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert("There ir an error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
