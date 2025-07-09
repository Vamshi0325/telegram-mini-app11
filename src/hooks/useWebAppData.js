import { useEffect, useState } from "react";

const useWebAppData = () => {
  const [webAppInitData, setWebAppInitData] = useState(null);
  const [initDataLoading, setInitDataLoading] = useState(true);

  useEffect(() => {
    const fetchWebAppInitData = () => {
      if (
        window.Telegram &&
        window.Telegram.WebApp &&
        window.Telegram.WebApp.initData
      ) {
        console.log("initData", window.Telegram.WebApp.initData);

        return window.Telegram.WebApp.initData;
      }
      return null;
    };

    // Capture initData from Telegram Web App
    // const initData = fetchWebAppInitData();
    const initData = fetchWebAppInitData();
    if (initData) {
      setWebAppInitData(initData);
      setInitDataLoading(false);
    }
  }, []);

  return { webAppInitData, initDataLoading };
};

export default useWebAppData;
