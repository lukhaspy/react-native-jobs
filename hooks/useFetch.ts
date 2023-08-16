import axios from "axios";
import { useState, useEffect } from "react";
interface Props {
  endpoint: string;
}
const useFetch = ({ endpoint }: Props) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
};
