import type { Load } from '@sveltejs/kit';
import { MarkdownService } from 'src/services/MarkdownService';

const patternMarkdownService = new MarkdownService({
  srcDir: ("patterns"),
  extensions: ["md"],
});


export const load: Load = ({ params }) => {
  const { slug } = params;

  if (!slug) {
    throw new Error('No slug provided');
  }

  return {
    markdown: patternMarkdownService.getMarkdown(slug)
  };
}