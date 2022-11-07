import type { Load } from '@sveltejs/kit';
import { journalMarkdownService } from '../journalMarkdownService';


export const load: Load = ({ params }) => {
  const { slug } = params;

  if (!slug) {
    throw new Error('No slug provided');
  }

  return {
    markdown: journalMarkdownService.getBySlug(slug)
  };
}