'use client'

import ProfileCard from "@/components/elements/ProfileCard";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import toast from "react-hot-toast";

const Index = () => {
  const contactTrans = useTranslations('contact')
  const locale = useLocale()

  return (
    <section className="content-box-area mt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4">
            <ProfileCard />
          </div>
          <div className="col-xl-8">
            <div className="card content-box-card">
              <div className="card-body portfolio-card contact-card">
                <div className="top-info">
                  <div className="text">
                    <h1 className="main-title">
                      {
                        locale == 'en' ? <>
                          Let's 👋 <span>Work</span> Together
                        </>
                          :
                          <>
                            Hãy 👋<span>Làm việc</span> cùng nhau
                          </>
                      }

                    </h1>
                    <p>
                      {
                        locale === 'en' ?
                          `I'm here to assist if you're looking for a web app developer to bring your vision to life or a reliable partner to elevate your business to new heights.`
                          : "Tôi sẵn sàng trợ giúp nếu bạn đang tìm kiếm một nhà phát triển web app để biến ý tưởng của bạn thành hiện thực hoặc một đối tác thiết kế để giúp đưa doanh nghiệp của bạn lên một tầm cao mới."
                      }

                    </p>
                  </div>
                </div>
                <div className="contact-area">
                  <div className="leave-comments-area">
                    <div className="comments-box">
                      <form
                        id="contact-form"
                        onSubmit={(e) => {
                          e.preventDefault()
                          toast.success(contactTrans("send_success"))
                        }}
                      >
                        <div className="row gx-3">
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">{contactTrans('name')}</label>
                              <input
                                name="name"
                                type="text"
                                className="form-control shadow-none"
                                placeholder={contactTrans('enter_name')}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Email</label>
                              <input
                                name="email"
                                type="email"
                                className="form-control shadow-none"
                                placeholder={contactTrans('enter_email')}
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-4">
                              <label className="form-label">{contactTrans('subject')}</label>
                              <input
                                name="subject"
                                type="text"
                                className="form-control shadow-none"
                                placeholder={contactTrans('enter_subject')}
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="mb-4">
                              <label className="form-label">{contactTrans('comment')}</label>
                              <textarea
                                name="message"
                                className="form-control shadow-none"
                                rows={4}
                                placeholder={contactTrans('enter_comment')}
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button className="submit-btn" type="submit">
                              {contactTrans('send_message')}
                              <svg
                                className="icon"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.5 11.6665V6.6665H12.5"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </form>
                      <p className="ajax-response mb-0" />
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
