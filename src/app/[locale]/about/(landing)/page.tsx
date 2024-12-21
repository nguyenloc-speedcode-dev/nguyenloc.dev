'use client'

import ProfileCard from "@/components/elements/ProfileCard";
import WorkExperienceTimeline from "@/components/elements/WorkExperienceTimeline";
import { SkillData } from "@/constant/mockup";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Index = () => {

  const { isDarkMode } = useStore()

  return (
    <section className="content-box-area mt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4">
            <ProfileCard />
          </div>
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">
                      Hi, This Is <span>Nguyen Thanh Loc</span> 👋
                    </h1>
                    <p>
                      I am a <span>
                        Web App Developer
                      </span>  with over
                      <span>
                        3 years of experience </span>
                      in building and developing web app products.
                    </p>
                  </div>
                  <div className="available-btn">
                    <span>
                      <i className="fas fa-circle" /> Available For Hire
                    </span>
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
                      <h3 className="number">10+</h3>
                      <p className="subtitle">Happy Client</p>
                    </div>
                  </div>
                </div>

                <div className="working-with-area">
                  <h2 className="main-common-title">Mastering Key Skills ✨</h2>
                  <div className="working-with-main">
                    {SkillData.map((i, index) => (
                      <div className="items" key={index} style={{}}>
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
                    ))}
                  </div>
                </div>

                <div className="work-together-slider">
                  <div className="slider-main d-flex gap-4 align-items-center">
                    <div className="slider-item">
                      <Link href="/contact">Let's 👋 Work Together</Link>
                      <Link href="/contact">Let's 👋 Work Together</Link>
                    </div>
                    <div className="slider-item">
                      <Link href="/contact">Let's 👋 Work Together</Link>
                      <Link href="/contact">Let's 👋 Work Together</Link>
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
