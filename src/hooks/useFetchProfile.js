import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProfile = (webAppInitData) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch the user's profile from the backend
  const fetchProfile = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/profile`,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
            "x-client-id": import.meta.env.VITE_CLIENT_ID,
            "init-data": webAppInitData, // Ensure you're passing the init-data
          },
        }
      );

      console.log("Fetched profile:", response.data);

      setProfile(response.data); // Update the profile state
      setLoading(false);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setLoading(false);
    }
  };

  // Fetch profile once the initData is available
  useEffect(() => {
    if (webAppInitData) {
      fetchProfile();
    }
  }, [webAppInitData]);

  return { profile, loading };
};

export default useFetchProfile;
