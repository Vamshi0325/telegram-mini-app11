import { useEffect, useState } from "react";

const useWebAppData = () => {
  const [webAppInitData, setWebAppInitData] = useState(null);
  const [initDataLoading, setInitDataLoading] = useState(false);

  useEffect(() => {
    setInitDataLoading(true);

    // Function to fetch the initData from Telegram WebApp
    const fetchWebAppInitData = () => {
      if (
        window.Telegram &&
        window.Telegram.WebApp &&
        window.Telegram.WebApp.initData
      ) {
        console.log("initData:", window.Telegram.WebApp.initData);
        return window.Telegram.WebApp.initData; // Return initData if available
      }
      return null; // Return null if initData is not found
    };

    const initData = fetchWebAppInitData();
    if (initData) {
      setWebAppInitData(initData); // Set initData to state
      setInitDataLoading(false); // Set loading state to false once the data is fetched
    } else {
      setInitDataLoading(false); // Ensure loading state is set to false if no data is found
    }
  }, []); // The empty dependency array ensures this runs only once on component mount

  return { webAppInitData, initDataLoading }; // Return the state variables
};

export default useWebAppData;
