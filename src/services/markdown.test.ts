import { describe, it, beforeAll, expect } from 'vitest'
import { MarkdownService } from "./markdown";

describe("MarkdownService", () => {
  let markdownService: MarkdownService;

  beforeAll(() => {
    markdownService = new MarkdownService({
      srcDir: "./markdown.test.data",
      extensions: ["md"],
    });
  });

  it("should work", () => {
    // don't throw
    markdownService.getMarkdown("empty");
  });

  it("should throw if file not found", () => {
    expect(() => markdownService.getMarkdown("not-found")).toThrowError("");
  });
});