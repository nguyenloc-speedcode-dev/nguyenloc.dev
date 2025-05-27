

import { getSortedPostsData } from "@/blogs";
import React from "react";
import BlogCard from "./components/BlogCard";
import { getTranslations } from "next-intl/server";


async function fetchData() {
  const postsData = await getSortedPostsData();
  // Convert markdown to HTML for each post
  const postsWithHtml = await Promise.all(
    postsData.map(async (post) => {
      return {
        ...post,
      };
    })
  );
  return postsWithHtml
}

const Index = async () => {
  const blogs = await fetchData()
  const t = await getTranslations('blog')

  return (
    <div className="col-xl-8">
      <div className="card content-box-card">
        <div className="card-body portfolio-card">
          <div className="top-info">
            <div className="text">
              <h1 className="main-title">
                {t('title')}
              </h1>
              <p>
                {t('description')}
              </p>
            </div>
          </div>
          <div className="article-publications article-area">
            <div className="article-publications-main">
              <div className="row">
                {
                  blogs.map((post: any, index: number) => (
                    <div className="col-xl-6 col-lg-4 col-md-6" key={index}>
                      <BlogCard post={post} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;
