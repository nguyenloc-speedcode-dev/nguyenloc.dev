'use client'

import React from "react";

import Image from "next/image";
import { SkillData } from "@/constant/mockup";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const SkillCard = () => {
  const breakpoint = useBreakpoint()
  const cardData = breakpoint === 'mobile' ? SkillData.slice(0, 9) : SkillData.slice(0, 15);
  return (
    <div className="card expertise-card">
      <div className="card-body">
        <h3 className="card-title">My Skill Area</h3>
        <div className="expertise-main mt-24">
          <div className="row g-3">
            {cardData.map((i, index) => (
              <div className="col-xl-4 col-md-4 col-sm-4 col-4" key={index}>
                <div className="expertise-item">
                  <div className="image text-center" style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#fff",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                    margin: 'auto'
                  }}>
                    <Image src={i.img} alt={i.title} width={48} height={48} />
                  </div>
                  <div className="text">
                    <h4 className="title">{i.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row my-3 ">
            <Link
              className="link-btn d-flex  justify-content-end"
              href="/about"
            >
              All Skill
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
