'use client'

import ProfileCard from "@/components/elements/ProfileCard";
import ReviewProject from "@/components/elements/ReviewProject";
import WorkExperienceTimeline from "@/components/elements/WorkExperienceTimeline";
import { projectsData } from "@/constant/mockup";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";


const Index = () => {
  const t = useTranslations()
  const locale = useLocale()
  const [isShowReview, setIsShowReview] = useState<string | boolean>(false)

  return (
    <section className="content-box-area mt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4">
            <ProfileCard />
          </div>
          <div className="col-xl-8">
            <div className="working-with-area">
              <h2 className="main-common-title">{t('heading.work_experience')} ✨</h2>
              <WorkExperienceTimeline />
            </div>
            <div className="card content-box-card" id="projects">
              <div className="card-body portfolio-card">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">
                      {
                        locale == 'en' ?
                          <>
                            Check Out My Latest <span> Projects</span>
                          </>
                          :
                          <>
                            Khám phá <span> Dự án</span> mới nhất của tôi
                          </>
                      }

                    </h1>
                    <p>
                      I'm here to help if you're searching for a product
                      designer to bring your idea to life or a design partner to
                      help take your business to the next level.
                    </p>
                  </div>
                </div>
                <div className="portfolio-area">
                  <div className="row g-4 parent-container">
                    {projectsData.map((i, index) => (
                      <div className="col-lg-12" key={index}>
                        <div className="portfolio-item">
                          <div className="image">
                            <Image
                              src={i.img}
                              alt={i.title}
                              className="img-fluid w-100"
                            />
                            <div
                              onClick={() => setIsShowReview(i.link)}
                              className="gallery-popup full-image-preview parent-container"
                            >
                              <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              >
                                <path d="M10 4.167v11.666M4.167 10h11.666" />
                              </svg>
                            </div>
                          </div>
                          <div className="text">
                            <div className="info">
                              <div className="title">
                                {i.title}
                              </div>
                              <p className="subtitle">{i.tech}</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                  {/* <div className="pagination">
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
                            />
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
                            />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div> */}
                  <ReviewProject linkIframe={isShowReview} onClose={() => setIsShowReview(false)} />
                </div>
                <div className="work-together-slider">
                  <div className="slider-main d-flex gap-4 align-items-center">
                    <div className="slider-item">
                      <a href="contact.html">Let's 👋 Work Together</a>
                      <a href="contact.html">Let's 👋 Work Together</a>
                    </div>
                    <div className="slider-item">
                      <a href="contact.html">Let's 👋 Work Together</a>
                      <a href="contact.html">Let's 👋 Work Together</a>
                    </div>
                  </div>
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
