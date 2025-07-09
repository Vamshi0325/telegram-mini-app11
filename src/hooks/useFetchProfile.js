import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProfile = (webAppInitData) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/profile`,
        {
          headers: {
            "init-data": webAppInitData,
          },
        }
      );

      console.log("Fetched profile:", response.data);
      setProfile(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (webAppInitData) {
      fetchProfile();
    }
  }, [webAppInitData]);

  return { profile, loading };
};

export default useFetchProfile;
