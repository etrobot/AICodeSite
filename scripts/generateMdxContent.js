const fs = require('fs');
const path = require('path');
const { compileMDX } = require('next-mdx-remote/rsc');

const markdownDir = path.join(process.cwd(), 'markdown');
const outputDir = path.join(process.cwd(), 'mdx-content');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function generateContent() {
  const filenames = fs.readdirSync(markdownDir);
  const mdxFiles = filenames.filter(file => file.endsWith('.mdx'));

  const routes = [];

  for (const file of mdxFiles) {
    const slug = file.replace(/\.mdx$/, '');
    const filePath = path.join(markdownDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { content, frontmatter } = await compileMDX({
      source: fileContent,
      options: { parseFrontmatter: true }
    });

    const outputPath = path.join(outputDir, `${slug}.json`);
    fs.writeFileSync(outputPath, JSON.stringify({ content, frontmatter }));

    routes.push({ slug });
  }

  fs.writeFileSync(
    path.join(outputDir, 'routes.json'),
    JSON.stringify(routes)
  );
}

generateContent();