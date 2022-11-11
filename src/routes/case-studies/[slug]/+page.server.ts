import type { Load } from '@sveltejs/kit';
import { caseStudyMarkdownService } from '../caseStudyMarkdownService';


export const load: Load = ({ params }) => {
  const { slug } = params;

  if (!slug) {
    throw new Error('No slug provided');
  }

  return {
    markdown: caseStudyMarkdownService.getBySlug(slug)
  };
}