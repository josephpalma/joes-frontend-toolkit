import { useState, useEffect, useCallback } from "react";

const cache = {};

const useFetch = ({ url, init, processData }) => {

  // Response state
  const [data, setData] = useState();

  // Turn objects into strings for useCallback & useEffect dependencies
  const [stringifiedUrl, stringifiedInit] = [JSON.stringify(url), JSON.stringify(init)];

  // If no processing function is passed just return the data
  // The callback hook ensures that the function is only created once
  // and hence the effect hook below doesn't start an infinite loop
  const processJson = useCallback(processData || ((jsonBody) => jsonBody), []);

  useEffect(() => {
    // Define asynchronous function
    const fetchApi = async () => {
      try {
        if (cache[url]) {
          const data = cache[url];
          setData(data);
        } else {
          // Fetch data from REST API
          const response = await fetch(url, init);
          if (response.status === 200) {
            // Extract json
            const rawData = await response.json();
            const processedData = processJson(rawData);
            cache[url] = processedData; // set response in cache;
            setData(processedData);
          } else {
            console.error(`Error ${response.status} ${response.statusText}`);
          }
        }
      } catch (error) {
        console.error(`Error ${error}`);
      }
    };

    // Call async function
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringifiedUrl, stringifiedInit, processJson]);

  return data;
};

export default useFetch;
