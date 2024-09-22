import { defineDocumentType, makeSource } from "contentlayer2/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern:  "**/*.md",  // 将 .mdx 改为 .md
  contentType: "markdown",     // 将 mdx 改为 markdown
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/page/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "markdown",
  documentTypes: [Post],
});
