// src/hooks/useRegisterUser.js
import { useEffect, useState } from "react";
import axios from "axios";

const useRegisterUser = (webAppInitData) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  console.log("Sending initData to backend:", webAppInitData);

  const handleOnBoarderUser = async (webAppInitData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api`,
        {}, // Empty body
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
            "x-client-id": import.meta.env.VITE_CLIENT_ID,
            "init-data": webAppInitData, // Send initData in the headers
          },
        }
      );

      console.log("Response from backend:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error during onboarding:", error);
      return null;
    }
  };

  useEffect(() => {
    const initializeUser = async () => {
      if (webAppInitData) {
        const onboardedUser = await handleOnBoarderUser(webAppInitData);
        if (onboardedUser?.user) {
          setUser(onboardedUser.user);
          setToken(onboardedUser.token);
        }
      }
    };

    initializeUser();
  }, [webAppInitData]);

  return { user, token };
};

export default useRegisterUser;
