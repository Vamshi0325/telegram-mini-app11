import { useEffect, useState } from "react";

const useWebAppData = () => {
  const [webAppInitData, setWebAppInitData] = useState(null);
  const [initDataLoading, setInitDataLoading] = useState(false);

  useEffect(() => {
    setInitDataLoading(true);
    const fetchWebAppInitData = () => {
      if (
        window.Telegram &&
        window.Telegram.WebApp &&
        window.Telegram.WebApp.initData
      ) {
        console.log("initData:", window.Telegram.WebApp.initData);

        return window.Telegram.WebApp.initData;
      }
      return null;
    };

    const initData = fetchWebAppInitData();
    // const initData =
    //   "query_id=AAEeenk4AwAAAB56eTi_NhOW&user=%7B%22id%22%3A7389936158%2C%22first_name%22%3A%22V%20A%20M%20S%20H%20I%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22vamshivade%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FKeWMpbM_YyJBB9mypzfsL8F9mmx6ysXKPWL_aDlNWLoMNBhFqu9s_kRLpPSdFDGa.svg%22%7D&auth_date=1752067375&signature=1LnybFHa50PszytTghto_dPy6TxpcAAw679T-Rz-8SoNvkDTRQ0YJWmthh0aEWLUbZVbLTGDuWT7zyGjyYKUDw&hash=c245ea595e96e326f130fb22def46943485b01c598fbd83e1e9886ce999e9710";
    if (initData) {
      setWebAppInitData(initData);
      setInitDataLoading(false);
    }
  }, []);

  return { webAppInitData, initDataLoading };
};

export default useWebAppData;
