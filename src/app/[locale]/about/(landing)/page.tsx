'use client'

import { SkillData } from "@/constant/mockup";
import { useStore } from "@/store/useStore";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Index = () => {
  const t = useTranslations()
  const { isDarkMode } = useStore()

  return (
   <>
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body">
            <div className="top-info">
              <div className="text">
                <h1 className="main-title">
                  Hi, This Is <span>Nguyen Thanh Loc</span> 👋
                </h1>
                <p dangerouslySetInnerHTML={{
                  __html: t('profile.aboutMe', {
                    role: 'Web App Developer',
                    experience: '3 years of experience',
                  })
                }}>


                </p>
              </div>

            </div>
            <div className="counter-area">
              <div className="counter">
                <div className="counter-item">
                  <h3 className="number">3+</h3>
                  <p className="subtitle">Year of Experience</p>
                </div>
                <div className="counter-item">
                  <h3 className="number">10+</h3>
                  <p className="subtitle">Project Completed</p>
                </div>
                <div className="counter-item">
                  <h3 className="number">20+</h3>
                  <p className="subtitle">Happy Client</p>
                </div>
              </div>
            </div>

            <div className="working-with-area">
              <h2 className="main-common-title">{t('heading.mastering_key_skills')} ✨</h2>
              <div className="working-with-main">
                {SkillData.map((i, index) => (
                  <div>
                    <div className="items " key={index} style={{}}>

                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: isDarkMode ? "#fff" : 'transparent',
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image src={i.img} alt={i.title} />
                      </div>

                    </div>
                    <div className="text-center my-2">
                      <h4 className="title" style={{
                        fontSize: '16px',
                        color: "#000"
                      }}>{i.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="work-together-slider">
              <div className="slider-main d-flex gap-4 align-items-center">
                <div className="slider-item">
                  <Link href="/contact">Let’s Make It Happen</Link>
                  <Link href="/contact">Build With Passion. Code With Us.</Link>
                </div>
                <div className="slider-item">
                  <Link href="/contact">Turning Ideas Into Reality</Link>
                  <Link href="/contact">You dream it, I’ll build it</Link>
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
