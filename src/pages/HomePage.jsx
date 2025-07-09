import { useEffect, useState } from "react";
import useFetchProfile from "../hooks/useFetchProfile";
import useRegisterUser from "../hooks/useRegisterUser";
import useWebAppData from "../hooks/useWebAppData";
import LoadingScreen from "../components/LoadingScreen";


const HomePage = () => {
  const { webAppInitData } = useWebAppData();
  const { onBoardedUser } = useRegisterUser(webAppInitData);
  const { profile, loading } = useFetchProfile(webAppInitData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!webAppInitData) return;

    if (onBoardedUser?.id) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
      window.Telegram.WebApp.open(); // Open the Telegram bot for invalid user
    }
  }, [onBoardedUser, webAppInitData]);

  return (
    <div>
      {isLoading || loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <h1>Welcome to the Homepage</h1>
          <p>User Data: {JSON.stringify(profile)}</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
