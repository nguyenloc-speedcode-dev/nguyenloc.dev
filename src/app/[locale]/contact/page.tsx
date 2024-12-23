import ProfileCard from "@/components/elements/ProfileCard";
import React from "react";

const Index = () => {
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
                      Let's 👋 <span>Work</span> Together
                    </h1>
                    <p>
                      I'm here to help if you're searching for a product
                      designer to bring your idea to life or a design partner to
                      help take your business to the next level.
                    </p>
                  </div>
                </div>
                <div className="contact-area">
                  <div className="leave-comments-area">
                    <div className="comments-box">
                      <form
                        id="contact-form"
                        action="https://marveltheme.com/tf/html/bentofolio-html/assets/mail.php"
                        method="POST"
                      >
                        <div className="row gx-3">
                          <div className="col-md-6">
                            <div className="mb-4">
                              <label className="form-label">Name</label>
                              <input
                                name="name"
                                type="text"
                                className="form-control shadow-none"
                                placeholder="Enter your name"
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
                                placeholder="Enter your email"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mb-4">
                              <label className="form-label">Subject</label>
                              <input
                                name="subject"
                                type="text"
                                className="form-control shadow-none"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                     
                          <div className="col-md-12">
                            <div className="mb-4">
                              <label className="form-label">Comment</label>
                              <textarea
                                name="message"
                                className="form-control shadow-none"
                                rows={4}
                                placeholder="Type details about your inquiry"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button className="submit-btn" type="submit">
                              Send Message
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
