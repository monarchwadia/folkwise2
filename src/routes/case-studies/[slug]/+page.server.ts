import type { Load } from '@sveltejs/kit';
import { caseStudyMarkdownService } from '../caseStudyMarkdownService';


export const load: Load = ({ params }) => {
  const { slug } = params;

  if (!slug) {
    throw new Error('No slug provided');
  }

  const markdown = caseStudyMarkdownService.getBySlug(slug);

  if (!markdown) {
    throw new Error('Markdown not found.');
  }

  return {
    markdown
  };
}