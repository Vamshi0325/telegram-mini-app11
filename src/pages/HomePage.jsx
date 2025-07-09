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

  console.log("Profile:", profile);
  console.log("onBoardedUser:", onBoardedUser);

  useEffect(() => {
    if (!webAppInitData) return;

    if (onBoardedUser?.id) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [onBoardedUser, webAppInitData]);

  return (
    <div>
      {isLoading || loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <h1>Welcome to the Homepage</h1>
          <h2>User Profile</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Field
                </th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {profile && (
                <>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      Username
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {profile.username}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      First Name
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {profile.first_name}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      Telegram ID
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {profile.telegram_id}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      Points
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {profile.points}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      Profile Image
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {profile.profile_image ? (
                        <img
                          src={profile.profile_image}
                          alt="Profile"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      ) : (
                        <span>No image</span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      Created At
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {new Date(profile.createdAt).toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      Updated At
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {new Date(profile.updatedAt).toLocaleString()}
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HomePage;
