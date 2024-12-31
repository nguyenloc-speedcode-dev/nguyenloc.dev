"use client";

import React from "react";
import profile_image from "@/assets/images/profile.png";
import Image from "next/image";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";
import Link from "next/link";
import { ROUTES } from "@/routes";
const ProfileCard = () => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const t = useTranslations('profile')


  return (
    <div className="card profile-card">
      <div className="card-body">
        <div className="image text-center">
          <Image src={profile_image} alt="profile"
            sizes="400px"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className="text">
          <h3 className="card-title">Nguyen Thanh Loc 👋</h3>
          <p dangerouslySetInnerHTML={{
            __html: t('aboutMe', {
              role: 'Web App Developer',
              experience: '3 years of experience',
            })
          }}>


          </p>
          <div className="common-button-groups">
            <Link className="btn btn-call" href={ROUTES.RESUME} >
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={24}
                height={24}>
                <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
              </svg>

              {t('cv')}
            </Link>
            <button
              className="btn btn-copy"
              data-clipboard-text="nguyenloc12021999vn@gmail.com"
              onClick={() => {
                copyToClipboard("nguyenloc12021999vn@gmail.com")
                toast.success("Copied!!")
              }}
            >
              <svg
                className="icon"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Copy Email
            </button>
          </div>
          <div className="social-media-icon">
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/loc120299/" target="_blank">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://t.me/speedcode_dev" target="_blank">
                  <i className="fab fa-telegram" />
                </a>
              </li>
              <li>
                <a href="https://github.com/nguyenloc120299" target="_blank">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href="https://x.com/LcNguyn76947691" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="tel:+84378028840">
                  <i className="fas fa-phone" />
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
