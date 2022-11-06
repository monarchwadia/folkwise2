import { describe, it, beforeAll, expect } from 'vitest'
import { MarkdownService } from "./MarkdownService";

describe("MarkdownService", () => {
  let markdownService: MarkdownService;

  beforeAll(() => {
    markdownService = new MarkdownService({
      srcDir: "./markdown.test.data",
      extensions: ["md"],
    });
  });

  describe("frontmatter", () => {
    it("should parse frontmatter", () => {
      const file = markdownService.getMarkdown("with-frontmatter");
      expect(file).toMatchSnapshot();
    })
  })

  it("should work", () => {
    // don't throw
    markdownService.getMarkdown("empty");
  });

  it("should throw if file not found", () => {
    expect(() => markdownService.getMarkdown("not-found")).toThrowError("Could not find file");
  });
});