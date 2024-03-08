import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "27cbfcb0704dd4eb2"; // Replace "YOUR_CONTEXT_KEY" with your actual Custom Search Engine ID

const useGoogleSearch = (term) => {
  // Accept 'term' as a parameter
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
