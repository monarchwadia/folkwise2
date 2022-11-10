import type { Load } from '@sveltejs/kit';
import { patternMarkdownService } from './knowledgeBaseMarkdownService';


export const load: Load = () => {
  const markdowns = patternMarkdownService.list();

  return {
    markdowns
  };
}