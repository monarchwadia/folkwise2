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
import rehypeExternalLinks from 'rehype-external-links';
import { linkTagDataReload } from "src/linkTagDataReload.plugin.rehype";


type Options = {
  srcDir: string;
  extensions: string[];
}

type Frontmatter = Record<string, any>;

export type Markdown = {
  content: string;
  frontmatter: Frontmatter;
  slug: string;
}

export class MarkdownService {
  markdownParser: Processor;

  constructor(private options: Options) {
    this.markdownParser = this.buildMarkdownParser()
  }

  getBySlug(slug: string): Markdown {
    // find a file that matches the slug and extension
    const fileContents = this.readFileBySlug(slug);
    const file = this.markdownParser.processSync(fileContents);

    const content = file.toString()
    const frontmatter = file.data.frontmatter as Record<string, any>;

    const markdown: Markdown = {
      content,
      frontmatter,
      slug
    }

    return markdown;
  }

  list(includeContent = false): Markdown[] {
    const srcDirPath = path.resolve(this.options.srcDir);
    const files = fs.readdirSync(srcDirPath);

    const slugs = files
      .filter(file => {
        const ext = path.extname(file).replace(".", "");
        return this.options.extensions.includes(ext);
      })
      .map(file => path.basename(file, path.extname(file))); // remove extension from filename

    const unfilteredMarkdowns: Markdown[] = slugs.map(slug => {
      const fileContents = this.readFileBySlug(slug);
      const file = this.markdownParser.processSync(fileContents);
      const frontmatter = file.data.frontmatter as Frontmatter;

      const content = includeContent ? file.toString() : '';

      return {
        content,
        frontmatter,
        slug
      };
    });

    // return only those which have frontmatter
    const markdowns: Markdown[] = [];
    unfilteredMarkdowns.forEach((md) => {
      if (!md.frontmatter) {
        console.error("Error! Markdown with slug " + md.slug + " does not have frontmatter! Skipping...");
        return;
      }

      markdowns.push(md);
    });

    return markdowns;
  }

  // private

  private readFileBySlug(slug: string): string {
    const possiblePaths = this.options.extensions
      .map(ext => path.resolve(this.options.srcDir, `${slug}.${ext}`))

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
      .use(rehypeExternalLinks)
      .use(linkTagDataReload)
      .use(rehypeStringify)
  }
}