import type { Element } from "rehype-format";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

// a unist plugin that adds a svelte data reload attribute to all links
export const linkTagDataReload: Plugin = () => {
  return (tree) => {
    visit(tree, "element", (node: Element) => {
      if (!node || node.tagName !== "a" || !node.properties || typeof node.properties.href !== "string") {
        return;
      }

      if (node.properties.href.startsWith("/")) {
        node.properties["data-sveltekit-reload"] = true;
      }
    });
  };
}