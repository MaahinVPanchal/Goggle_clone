import { useState, useEffect } from "react";
import { Api_key } from "./keys1";

const useGoogleSearchyt = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${Api_key}&q=${term}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearchyt;
