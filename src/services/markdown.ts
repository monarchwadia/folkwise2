import path from 'path';
import fs from 'fs';
import { unified, type Processor } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter, { type Root } from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'


type Options = {
  srcDir: string;
  extensions: string[];
}

type File = {
  path: string;
  content: string;
  frontmatter: Record<string, any>
}

export class MarkdownService {
  parser: Processor;

  constructor(private options: Options) {
    this.parser = unified()
      .use(remarkParse)
      .use(remarkFrontmatter)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
  }

  public async getMarkdown(slug: string) {
    // find a file that matches the slug and extension
    const fileContents = this.readFileBySlug(slug);

    // parse the frontmatter
    const xfile = this.parser.processSync(fileContents);

    console.log('XFILE', xfile);
  }

  private readFileBySlug(slug: string): string {
    const file = this.options.extensions
      .map(ext => path.join(this.options.srcDir, `${slug}.${ext}`))
      .find(file => fs.existsSync(file));

    if (!file) {
      throw new Error(`Could not find file for slug ${slug}`);
    };

    return fs.readFileSync(file, 'utf8');
  }

  private parseFrontmatter(content: string) {
    // parse the frontmatter

  }
}