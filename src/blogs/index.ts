import fs from "fs";
import path from "path";
import matter, { Input } from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { IBlog } from "@/interface/blogs";

const postsDirectory = path.join(process.cwd(), "src/blogs/data");

export async function parseMarkdownToHtml(markdown: string): Promise<string> {
  const processedContent = await remark().use(html).process(markdown);
  return processedContent.toString(); // Return HTML as a string
}

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName): Promise<IBlog> => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();
      // Combine the data with the id
      return {
        id,
        data: {
          ...matterResult.data,
        },
        content: contentHtml,
      };
    })
  );
  return allPostsData;
}
