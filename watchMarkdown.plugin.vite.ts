import type { PluginOption } from "vite";

// inspired by https://stackoverflow.com/questions/69626090/how-to-watch-public-directory-in-vite-project-for-hot-reload
export const watchMarkdown = (): PluginOption => {
  return {
    name: "watch-markdown",
    enforce: "post",
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".md")) {
        server.ws.send({
          type: "full-reload",
          path: "*"
        });
      }
    }
  }
}
