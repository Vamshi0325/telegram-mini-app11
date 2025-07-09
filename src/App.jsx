import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";


export default function App() {
  const [webapp, setWebapp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // This effect will be triggered when the component is mounted
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      console.log("Telegram Web App API is available");
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      setWebapp(window.Telegram.WebApp);
    } else {
      console.error("Telegram Web App API is not available.");
    }

    const handlePageLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      // If the page is already loaded
      handlePageLoad();
    } else {
      // Otherwise, wait for the load event
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoading ? <LoadingScreen /> : <HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
