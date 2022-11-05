import { MarkdownService } from "./markdown";

describe("MarkdownService", () => {
  it("should work", () => {
    const markdownService = new MarkdownService({
      srcDir: "./markdown.test.data",
      extensions: ["md"],
    });

    const markdown = markdownService.getMarkdown("services/markdown");

    console.log(markdown);
  });
});