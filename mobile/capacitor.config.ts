import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "frontend",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {},
  server: {
    url: "https://f9ed-154-125-10-9.ngrok.io",
  },
};

export default config;
