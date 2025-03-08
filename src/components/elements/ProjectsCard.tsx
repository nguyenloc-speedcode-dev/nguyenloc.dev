'use client'

import React, { useState } from "react";

import wagglife from "@/assets/images/portfolio/waggly_life.jpg";
import snailhouse from "@/assets/images/portfolio/snailhouse.jpg";
import friendify from "@/assets/images/portfolio/friendify.png";
import theGoats from "@/assets/images/portfolio/the-goatsfx.png";
import Image from "next/image";
import ReviewProject from "./ReviewProject";
import Link from "next/link";
import { useTranslations } from "next-intl";

const cardData = [
  {
    img: theGoats,
    title: "The GoatsFx Blogs",
    linkIframe: "https://www.thegoatsfx.com/"
  },
  {
    img: wagglife,
    title: "Waggly Life Projects",
    linkIframe: "https://www.wagglylife.com/"
  },
  {
    img: friendify,
    title: "Friendify Ai Projects",
    linkIframe: "https://app.friendify.ai/"
  },
  {
    img: snailhouse,
    title: "Snailhouse MarketPlace",
    linkIframe: "https://snailhouse.io/",
  },

];

const ProjectsCard = () => {
  const t = useTranslations()

  const [isShowReview, setIsShowReview] = useState<string | boolean>(false)

  return (
    <div className="card card-projects">
      <div className="card-body">
        <h3 className="card-title">
          {t("heading.recent_projects")}{" "}
          <Link className="link-btn" href="/works#projects">
            {t('heading.all_projects')}
            <svg
              className="icon"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16699 10H15.8337"
                stroke="#00b8d4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 15L15.833 10"
                stroke="#00b8d4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 5L15.833 10"
                stroke="#00b8d4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </h3>
        <div className="projects-main mt-24">
          <div className="row g-4 parent-container">
            {cardData.map((i, index) => (
              <div className="col-lg-12" key={index}>
                <div className="project-item">
                  <div className="image">
                    <Image
                      src={i.img}
                      alt={i.title}
                      className="img-fluid w-100"
                    />
                    <div
                      onClick={() => setIsShowReview(i.linkIframe)}
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
                    <div className="info">
                      <span className="category">{i.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ReviewProject
          linkIframe={isShowReview}
          onClose={() => setIsShowReview(false)} />
      </div>
    </div>
  );
};

export default ProjectsCard;
