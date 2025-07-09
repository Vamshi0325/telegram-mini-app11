// src/components/App.jsx
import React from "react";
import toast from "react-hot-toast";
import useWebAppData from "./hooks/useWebAppData";
import useRegisterUser from "./hooks/useRegisterUser";

function App() {
  const { webAppInitData, initDataLoading } = useWebAppData();
  const { user } = useRegisterUser(webAppInitData);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold text-center">
          Welcome to the Telegram Bot App
        </h1>

        {initDataLoading ? (
          <div className="text-center mt-4">Loading...</div>
        ) : user ? (
          <div>
            <p className="text-xl text-center mt-4">You are logged in!</p>
            <p className="text-center mt-4">Welcome, {user.first_name}!</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Start Bot
            </button>
          </div>
        ) : (
          <div>
            <p className="text-xl text-center mt-4">Please log in first.</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
