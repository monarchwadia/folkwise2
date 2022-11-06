import path from 'path';
import fs from 'fs';
import { unified, type Processor } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter, { type Root } from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkParseFrontmatter from 'remark-parse-frontmatter'
import rehypeStringify from 'rehype-stringify'
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format'


type Options = {
  srcDir: string;
  extensions: string[];
}

type Markdown = {
  content: string;
  frontmatter: Record<string, any>
}

export class MarkdownService {
  markdownParser: Processor;

  constructor(private options: Options) {
    this.markdownParser = this.buildMarkdownParser()
  }

  getMarkdown(slug: string): Markdown {
    // find a file that matches the slug and extension
    const fileContents = this.readFileBySlug(slug);
    const file = this.markdownParser.processSync(fileContents);

    const content = file.toString()
    const frontmatter = file.data.frontmatter as Record<string, any>;

    const markdown: Markdown = {
      content,
      frontmatter
    }

    return markdown;
  }

  // private

  private readFileBySlug(slug: string): string {
    const possiblePaths = this.options.extensions
      .map(ext => path.resolve(__dirname, this.options.srcDir, `${slug}.${ext}`))

    const file = possiblePaths.find(file => fs.existsSync(file));

    if (!file) {
      throw new Error(`Could not find file for slug ${slug}. Paths tried: ${possiblePaths.join(', ')}`);
    };

    return fs.readFileSync(file, 'utf8');
  }

  private buildMarkdownParser(): Processor<void, void, void, void> {
    return unified()
      .use(remarkParse)
      .use(remarkFrontmatter, ['yaml', 'toml'])
      .use(remarkParseFrontmatter)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeFormat)
      .use(rehypeStringify)
  }
}