import { MarkdownService } from 'src/services/MarkdownService';
import path from "path";
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const patternMarkdownService = new MarkdownService({
  srcDir: (path.resolve(__dirname, "../../../patterns")),
  extensions: ["md"],
});