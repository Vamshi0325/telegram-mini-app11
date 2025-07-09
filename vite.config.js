import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: "0.0.0.0", // Allow access from any network
  //   port: 3000, // Ensure Vite runs on port 3000
  //   allowedHosts: [
  //     "e9fea2b38b21.ngrok-free.app", // Add the ngrok URL here
  //   ],
  // },
});
