'use client'

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
    <>
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
                          onClick={() => {
                            if (i.type === 'app') {
                              return window.open(i.link, '_blank');
                            }
                            return setIsShowReview(i.link)
                          }}
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
    </>
  );
};

export default Index;
