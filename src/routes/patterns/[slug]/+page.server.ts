import type { Load } from '@sveltejs/kit';
import { patternMarkdownService } from '../patternMarkdownService';


export const load: Load = ({ params }) => {
  const { slug } = params;

  if (!slug) {
    throw new Error('No slug provided');
  }

  return {
    markdown: patternMarkdownService.getBySlug(slug)
  };
}