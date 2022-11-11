import type { Load } from '@sveltejs/kit';
import { articlesMarkdownService } from './articlesMarkdownService';


export const load: Load = () => {
  const markdowns = articlesMarkdownService.list();

  return {
    markdowns
  };
}