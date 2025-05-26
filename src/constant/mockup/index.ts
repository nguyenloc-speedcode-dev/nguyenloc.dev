import _nodejs from "@/assets/images/skill/nodejs.png";
import _reactjs from "@/assets/images/skill/reactjs.png";
import _nextjs from "@/assets/images/skill/nextjs.png";
import _expressjs from "@/assets/images/skill/expressjs.png";
import _figma from "@/assets/images/skill/figma.png";
import javascript from "@/assets/images/skill/javascript.png";
import _mongodb from "@/assets/images/skill/mongodb.png";
import _mysql from "@/assets/images/skill/mysql.png";
import _nestjs from "@/assets/images/skill/nestjs.png";
import _vuejs from "@/assets/images/skill/vuejs.png";
import _ubuntu from "@/assets/images/skill/ubuntu.png";
import _taiwindcss from "@/assets/images/skill/taiwindcss.png";
import _sass from "@/assets/images/skill/sass.png";
import _antdesign from "@/assets/images/skill/antdesign.svg";
import _redux from "@/assets/images/skill/redux.png";
import _netlify from "@/assets/images/skill/netlify.png";
import _render from "@/assets/images/skill/render.svg";
import _vercel from "@/assets/images/skill/vercel.png";
import _ionic from "@/assets/images/skill/ionic.png";
import _firebase from "@/assets/images/skill/firebase.png";
import _supabasejs from "@/assets/images/skill/supabase.png";

import aihome from "@/assets/images/portfolio/aihome.png";
import wagglilife from "@/assets/images/portfolio/waggly_life.jpg";
import friendify from "@/assets/images/portfolio/friendify.png";
import poolswallet from "@/assets/images/portfolio/poolswallet.webp";
import snailhouse from "@/assets/images/portfolio/snailhouse.jpg";
import theGoats from "@/assets/images/portfolio/the-goatsfx.png";

import tikatika from "@/assets/logo/tikatika-logo.png";
import playground from "@/assets/logo/playground.png";
import hopper from "@/assets/logo/hopper.png";
import freelance from "@/assets/logo/free-trade-area.png"

import { useMemo } from "react";
import { useTranslations } from "next-intl";

export const SkillData = [
  {
    img: javascript,
    title: "Javascript",
  },
  {
    img: _nodejs,
    title: "NodeJs",
  },
  {
    img: _expressjs,
    title: "ExpressJs",
  },
  {
    img: _reactjs,
    title: "ReactJs",
  },
  {
    img: _nextjs,
    title: "NextJS",
  },
  {
    img: _vuejs,
    title: "VueJs",
  },
  {
    img: _redux,
    title: "Redux",
  },
  {
    img: _antdesign,
    title: "Ant Design",
  },
  {
    img: _taiwindcss,
    title: "TaiwindCss",
  },
  {
    img: _mongodb,
    title: "MongoDB",
  },
  {
    img: _nestjs,
    title: "NestJs",
  },
  {
    img: _mysql,
    title: "MySQL",
  },
  {
    img: _ionic,
    title: "Ionic",
  },
  {
    img: _ubuntu,
    title: "Ubuntu",
  },
  {
    img: _netlify,
    title: "Netlify Cloud",
  },
  {
    img: _firebase,
    title: "Firebase",
  },
  {
    img: _render,
    title: "Render Cloud",
  },
  {
    img: _vercel,
    title: "Vercel Cloud",
  },
  {
    img: _supabasejs,
    title: "SupabaseJs",
  },
  {
    img: _sass,
    title: "Sass",
  },
  {
    img: _figma,
    title: "Figma",
  },
];

export const projectsData = [
  {
    img: theGoats,
    title: "The GoatsFx Blog",
    tech: "NextJs,TaiwindCss,Supabase JS ,Redux",
    link: "https://www.thegoatsfx.com/",
    type: "web",
  },
  {
    img: wagglilife,
    title: "The GoatsFx Blogs",
    tech: "NextJs,TaiwindCss,GraphQL,Redux",
    link: "https://www.wagglylife.com/",
    type: "web",
  },
  {
    img: poolswallet,
    title: "Pools Wallet",
    tech: "ReactJS,Ionic,EtherJS,Redux,Capacitor",
    link: "https://play.google.com/store/apps/details?id=com.wallet.pools&hl=en_US",
    type: "app",
  },
  {
    img: aihome,
    title: "Ai Homes",
    tech: "NextJs,TaiwindCss,Redux Toolkit",
    link: "https://play.google.com/store/apps/details?id=com.aihomes.io&hl=vi",
    type: "app",
  },

  {
    img: friendify,
    title: "Friendify AI",
    tech: "NextJs,TaiwindCss,Redux Thunk",
    link: "https://app.friendify.ai/",
    type: "web",
  },
  {
    img: snailhouse,
    title: "Snailhouse MarketPlace",
    tech: "ReactJs,Boostrap,Redux Thunk",
    link: "https://snailhouse.io/",
    type: "web",
  },
];

export const useWorkExperienceData = () => {
  const exTrans = useTranslations("experience");
  const workExperienceData = useMemo(
    () => [
      {
        title: "Freelance Web App Developer",
        company_name: "Freelance",
        avat_company: freelance,
        time: "01/2025 - 06/2025",
        contents: [exTrans("freelance_line_1")],
      },
      {
        title: "Web App Developer",
        company_name: "HOPPER VN",
        avat_company: hopper,
        time: "09/2023 - 11/2024",
        contents: [
          exTrans("hopper_line_1"),
          exTrans("hopper_line_2"),
          exTrans("hopper_line_3"),
        ],
      },
      {
        title: "Web App Developer",
        company_name: "PLAYGROUND",
        avat_company: playground,
        time: "12/2021 - 09/2023",
        contents: [
          exTrans("playground_line_1"),
          exTrans("playground_line_2"),
          exTrans("playground_line_3"),
          exTrans("playground_line_4"),
        ],
      },
      {
        title: "Web App Developer",
        company_name: "TIKATIKA",
        avat_company: tikatika,
        time: "08/2021 - 10/2021",
        contents: [exTrans("tikatika_line_1"), exTrans("tikatika_line_2")],
      },
    ],
    []
  );

  return workExperienceData;
};
