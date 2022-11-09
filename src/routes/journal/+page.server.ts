import type { Load } from '@sveltejs/kit';
import { journalMarkdownService } from './journalMarkdownService';


export const load: Load = () => {
  const markdowns = journalMarkdownService.list();

  return {
    markdowns
  };
}