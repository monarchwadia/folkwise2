import { describe, it, beforeAll, expect } from 'vitest'
import { MarkdownService } from "./MarkdownService";

describe("MarkdownService", () => {
  let markdownService: MarkdownService;

  beforeAll(() => {
    markdownService = new MarkdownService({
      srcDir: "src/services/markdown.test.data",
      extensions: ["md"],
    });
  });

  describe("frontmatter", () => {
    it("should parse frontmatter", () => {
      const file = markdownService.getBySlug("with-frontmatter");
      expect(file).toMatchSnapshot();
    })
  })

  it("should work", () => {
    // don't throw
    markdownService.getBySlug("empty");
  });

  it("should throw if file not found", () => {
    expect(() => markdownService.getBySlug("not-found")).toThrowError("Could not find file");
  });

  it("should return all files", () => {
    const markdowns = markdownService.list();
    expect(markdowns.length).toEqual(2);
  })
});