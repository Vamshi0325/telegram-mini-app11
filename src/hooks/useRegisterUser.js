import axios from "axios";
import { useEffect, useState } from "react";

const useRegisterUser = (webAppInitData) => {
  const [user, setUser] = useState({});

  const handleOnBoardedUser = async (webAppInitData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/start`, // Ensure the API URL is correct
        {}, // Send an empty body as init-data is passed in the headers
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
            "x-client-id": import.meta.env.VITE_CLIENT_ID,
            "init-data": webAppInitData, // Send init-data in headers
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error during onboarding:", error);
      return null;
    }
  };

  useEffect(() => {
    const initializeUser = async () => {
      if (webAppInitData) {
        const onBoardedUser = await handleOnBoardedUser(webAppInitData);

        if (onBoardedUser?.user?.id) {
          setUser(onBoardedUser.user);
        }
      }
    };

    initializeUser();
  }, [webAppInitData]);

  return { onBoardedUser: user };
};

export default useRegisterUser;
