import type { Load } from '@sveltejs/kit';
import { patternMarkdownService } from './patternMarkdownService';


export const load: Load = ({ params }) => {
  const markdowns = patternMarkdownService.list();

  return {
    markdowns
  };
}