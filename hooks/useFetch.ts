import axios from "axios";
import { useState, useEffect } from "react";
import { RAPID_API_KEY } from "../constants";
import { Alert } from "react-native";
import { JobPosting, JobPostingResponse } from "../interfaces/Jobs";
import jobPostings from "data/jobPostings";
interface Props {
  endpoint: string;
  query: {
    query?: string;
    num_pages?: number;
    page?: number;
    job_id?: number;
  };
}
const useFetch = ({ endpoint, query }: Props) => {
  const [data, setData] = useState<JobPosting[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": "7dd9f4a65fmshe8b502726e62457p16c6dcjsn3437e81ec1b5",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      // const response = await axios.request<JobPostingResponse>(options);

      // New Data
      setData(jobPostings);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      Alert.alert("There is an error" + error);
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

export default useFetch;
