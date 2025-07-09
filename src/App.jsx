// // src/components/App.jsx
// import React from "react";
// import toast from "react-hot-toast";
// import useWebAppData from "./hooks/useWebAppData";
// import useRegisterUser from "./hooks/useRegisterUser";

// function App() {
//   const { webAppInitData, initDataLoading } = useWebAppData();
//   const { user } = useRegisterUser(webAppInitData);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="text-3xl font-bold text-center">
//           Welcome to the Telegram Bot App
//         </h1>

//         {initDataLoading ? (
//           <div className="text-center mt-4">Loading...</div>
//         ) : user ? (
//           <div>
//             <p className="text-xl text-center mt-4">You are logged in!</p>
//             <p className="text-center mt-4">Welcome, {user.first_name}!</p>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
//               Start Bot
//             </button>
//           </div>
//         ) : (
//           <div>
//             <p className="text-xl text-center mt-4">Please log in first.</p>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import useWebAppData from "./hooks/useWebAppData";
import useRegisterUser from "./hooks/useRegisterUser";

export default function App() {
  const { webAppInitData, initDataLoading } = useWebAppData();
  const { user, token } = useRegisterUser(webAppInitData);

  if (initDataLoading) {
    return <div>Loading Telegram data…</div>;
  }

  if (!webAppInitData) {
    return <div>Please open this inside the Telegram WebApp.</div>;
  }

  if (!user) {
    return <div>Registering…</div>;
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Welcome, {user.firstName}!</h1>
      <p>
        Your Telegram ID: <code>{user.telegramId}</code>
      </p>
      <p>
        Your referral code: <code>{user.referralCode}</code>
      </p>
      <p>
        <em>JWT:</em> {token}
      </p>
      {/* Bonus: show a button to copy referral link */}
      <button
        onClick={() =>
          navigator.clipboard.writeText(
            `${window.location.origin}?ref=${user.referralCode}`
          )
        }
      >
        Copy your referral link
      </button>
    </div>
  );
}
