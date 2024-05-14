import { fileURLToPath } from "url";
import { Alias, defineConfig } from "vite";

const getAliasObject = (findName: string, path: string): Alias => {
  return {
    find: findName,
    replacement: fileURLToPath(new URL(path, import.meta.url)),
  };
};

export default defineConfig({
  server: {
    port: 4200,
    proxy: {
      "/api": {
        //changeOrigin: true,
        target: "http://127.0.0.1:4200",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})