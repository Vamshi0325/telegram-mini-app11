import { useState, useEffect } from "react";
import axios from "axios";

const useRegisterUser = (webAppInitData) => {
  const [user, setUser] = useState({});

  const handleOnBoardedUser = async (webAppInitData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/start`,
        {}, // Empty body
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
            "x-client-id": import.meta.env.VITE_CLIENT_ID,
            "init-data": webAppInitData,
          },
        }
      );
      return response.data; // Return the onboarded user data
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
