import type { Load } from '@sveltejs/kit';
import { journalMarkdownService } from './journal/journalMarkdownService';


export const load: Load = () => {
  const markdowns = journalMarkdownService.list(true);

  return {
    markdowns
  };
}