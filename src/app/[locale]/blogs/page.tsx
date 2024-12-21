

import { getSortedPostsData, parseMarkdownToHtml } from "@/blogs";
import ProfileCard from "@/components/elements/ProfileCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  console.log('====================================');
  console.log(blogs);
  console.log('====================================');
  return (
    <section className="content-box-area mt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4">
            <ProfileCard />
          </div>
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body portfolio-card">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">
                      My Recent Article and Publications
                    </h1>
                    <p>
                      I'm here to help if you're searching for a product
                      designer to bring your idea to life or a design partner to
                      help take your business to the next level.
                    </p>
                  </div>
                </div>
                <div className="article-publications article-area">
                  <div className="article-publications-main">
                    <div className="row">
                      {
                        blogs.map((post: any, index: number) => (
                          <div className="col-xl-6 col-lg-4 col-md-6" key={index}>
                            <div className="article-publications-item">
                              <div className="image">
                                <a href="article.html" className="d-block w-100">
                                  <Image
                                    src={post?.data?.img}
                                    alt="blog-img-1"
                                    className="img-fluid w-100"
                                    width={312}
                                    height={208}
                                  />
                                </a>
                                <a href="article.html" className="tags">
                                  <div>{post?.data?.slug}</div>
                                </a>
                              </div>
                              <div className="text">
                                <a href="article.html" className="title">
                                  {post.data.title}
                                </a>
                                <ul className="list-unstyled">
                                  <li>15 min read</li>
                                  <li>{post.data.date}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
                <div className="pagination">
                  <ul className="list-unstyled">
                    <li className="prev">
                      <button>
                        <svg
                          className="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                          ></path>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button>1</button>
                    </li>
                    <li>
                      <button>2</button>
                    </li>
                    <li>
                      <button>3</button>
                    </li>
                    <li>
                      <button className="next-page-btn">
                        <span className="dots">
                          <i className="fas fa-ellipsis-h" />
                        </span>
                        <span className="next-page">
                          <svg
                            className="icon icon-arrow-right"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 17 5-5-5-5" />
                            <path d="m13 17 5-5-5-5" />
                          </svg>
                        </span>
                        <span className="next-page-number">Next 4 pages</span>
                      </button>
                    </li>
                    <li>
                      <button>100</button>
                    </li>
                    <li className="next">
                      <button>
                        <svg
                          className="icon"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          ></path>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
