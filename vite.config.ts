import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
//https://github.com/vitejs/vite/issues/1973
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      REACT_APP_RAPID_API_KEY:
        "",
    },
  },
});
