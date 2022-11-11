import type { Load } from '@sveltejs/kit';
import { caseStudyMarkdownService } from './caseStudyMarkdownService';


export const load: Load = () => {
  const markdowns = caseStudyMarkdownService.list();

  return {
    markdowns
  };
}