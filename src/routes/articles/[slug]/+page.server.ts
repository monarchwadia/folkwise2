import type { Load } from '@sveltejs/kit';
import { articlesMarkdownService } from '../articlesMarkdownService';


export const load: Load = ({ params }) => {
  const { slug } = params;

  if (!slug) {
    throw new Error('No slug provided');
  }

  const markdown = articlesMarkdownService.getBySlug(slug)

  if (!markdown) {
    throw new Error('Markdown not found.');
  }

  return {
    markdown
  };
}