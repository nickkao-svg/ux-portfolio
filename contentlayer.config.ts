import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

export const CaseStudy = defineDocumentType(() => ({
  name: "CaseStudy",
  filePathPattern: `case-studies/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
    role: { type: "string", required: true },
    team: { type: "string", required: true },
    year: { type: "number", required: true },
    duration: { type: "string", required: true },
    tools: { type: "list", of: { type: "string" }, required: false },
    impact: { type: "list", of: { type: "string" }, required: false },
    heroImage: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    links: { type: "list", of: { type: "json" }, required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^case-studies\//, ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/work/${doc._raw.flattenedPath.replace(/^case-studies\//, "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [CaseStudy],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: ["anchor"] } }],
    ],
  },
});
