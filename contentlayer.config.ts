import { defineDocumentType, makeSource } from "contentlayer2/source-files";

const Wiki = defineDocumentType(() => ({
  name: "Wiki",
  filePathPattern: "wiki/*.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      description: "Wiki Title",
      required: true,
    },
    lastUpdated: {
      type: "date",
      description: "Wiki update time",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `${(doc._raw.flattenedPath)}`,
    },
  },
}));

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/*.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      description: "Blog Title",
      required: true,
    },
    date: {
      type: "date",
      description: "Blog publish time",
      required: true,
    },
    // ...
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "markdown",
  documentTypes: [Wiki, Blog],
});
