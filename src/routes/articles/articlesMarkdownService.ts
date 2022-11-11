import { MarkdownService } from 'src/services/MarkdownService';
import path from "path";
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const articlesMarkdownService = new MarkdownService({
  srcDir: (path.resolve(__dirname, "../../../articles")), // this path is carefully set to correlate to the config in vite.config.ts
  extensions: ["md"],
});