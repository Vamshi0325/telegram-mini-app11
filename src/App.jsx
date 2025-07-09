import React from "react";
import useWebAppData from "./hooks/useWebAppData";
import useRegisterUser from "./hooks/useRegisterUser";

export default function App() {
  const { webAppInitData, loading } = useWebAppData();
  const { user, token } = useRegisterUser(webAppInitData);

  if (loading) return <p>Loading…</p>;

  if (!webAppInitData) {
    return (
      <div style={{ padding: 20, fontFamily: "sans-serif" }}>
        <h2>Open inside the Telegram WebApp</h2>
      </div>
    );
  }

  if (!user) return <p>Registering you…</p>;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Welcome, {user.firstName}!</h1>
      <p>
        Your Telegram ID: <code>{user.telegramId}</code>
      </p>
      <p>
        Your Referral Code: <code>{user.referralCode}</code>
      </p>
      <p>
        JWT (for future calls): <code>{token}</code>
      </p>
      <button
        onClick={() =>
          navigator.clipboard.writeText(
            `${window.location.origin}?ref=${user.referralCode}`
          )
        }
      >
        Copy Your Referral Link
      </button>
    </div>
  );
}
