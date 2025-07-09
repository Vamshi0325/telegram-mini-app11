import { useEffect, useState } from "react";
import axios from "axios";

const useRegisterUser = (webAppInitData) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const onboard = async () => {
      if (!webAppInitData) return;

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api`,
          {},
          {
            headers: {
              "x-api-key": import.meta.env.VITE_API_KEY,
              "x-client-id": import.meta.env.VITE_CLIENT_ID,
              "init-data": webAppInitData,
            },
          }
        );
        console.log("Onboarding result:", res.data);
        
        if (res.data.user) {
          setUser(res.data.user);
          setToken(res.data.token);
          // you could also save to localStorage:
          // localStorage.setItem("jwt", res.data.token);
        }
      } catch (err) {
        console.error("Onboarding failed:", err);
      }
    };

    onboard();
  }, [webAppInitData]);

  return { user, token };
};

export default useRegisterUser;
