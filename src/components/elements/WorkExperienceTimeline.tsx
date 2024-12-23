'use client'

import React from 'react'

import tikatika from '@/assets/logo/tikatika-logo.png'
import playground from "@/assets/logo/playground.png"
import hopper from '@/assets/logo/hopper.png'
import clsx from 'clsx'
import Image from 'next/image'

const WorkExperienceTimeline = () => {
    const workExperienceData = [
        {
            title: "Web App Developer",
            company_name: "HOPPER VN",
            avat_company: hopper,
            time: "09/2023 - 11/2024",
            contents: [
                "Participated in outsource projects related to finance and social networks for pets",
                "Used Next.js framework ,ExpressJS, GraphQL to build projects",
                "Worked directly with clients on project features, contributing to the successful development and delivery of the project"
            ]
        },
        {
            title: "Web App Developer",
            company_name: "PLAYGROUND",
            avat_company: playground,
            time: "12/2021 - 09/2023",
            contents: [
                "Developed Web3 projects in the fields of finance and GameFi",
                "Used libraries and frameworks such as React.js, Ionic, Capacitor, Next.js, Nest.js, and Ether.js to develop projects",
                "Maintained and developed new features for projects",
                "Collaborated with department staff to ensure user-focused design and implementation, ensuring the website was released on time"

            ]
        },
        {
            title: "Web App Developer",
            company_name: "TIKATIKA",
            avat_company: tikatika,
            time: "8/2021 - 10/2021",
            contents: [
                "Maintained, fixed bugs, and updated the project with new features",
                "Enhanced skills and gained experience with technologies such as Vue.js and React.js",
            ]
        },
    ]
    return (
        <>

            <ul className="timeline">
                {
                    workExperienceData.map((i, index) => (
                        <li key={index} className={clsx({
                            "timeline-inverted": index & 1,
                            "": !(index & 1)
                        })}>
                            <div className={clsx("timeline-badge")}>
                                <a>
                                    <i className="fa fa-circle" id="" />
                                </a>
                            </div>
                            <div className="timeline-panel">
                                <div className='my-2 d-flex align-items-center '>
                                    <Image width={40} height={40} src={i.avat_company} alt={i.title} />
                                    <div className="timeline-heading">
                                        <h4>{i.title}</h4>
                                    </div>
                                </div>

                                <div className="timeline-body">
                                    <ul style={{ padding: "0 40px" }}>
                                        {
                                            i.contents.map((content, index) => (
                                                <li key={index}>
                                                    {content}
                                                </li>
                                            ))
                                        }


                                    </ul>
                                </div>
                                <div className="timeline-footer">
                                    <p className="text-right">{i.time}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }

                {/* <li className="timeline-inverted">
                    <div className="timeline-badge">
                        <a>
                            <i className="fa fa-circle invert" id="" />
                        </a>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>Freelance Web Developer - Bekov Creative Studio</h4>
                        </div>
                        <div className="timeline-body">
                            <p>Clients (Results Marketing, Red News, Weight Loss Houston)</p>
                        </div>
                        <div className="timeline-footer">
                            <p className="text-right">MARCH 2012 - SEPTEMBER 2014</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="timeline-badge">
                        <a>
                            <i className="fa fa-circle" id="" />
                        </a>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>Web Developer - Vestas</h4>
                        </div>
                        <div className="timeline-body">
                            <p>
                                Designed, developed and successfully implemented eLearning web sites
                                for new employees within the global team of Vestas Intranet, a
                                research company with 20,000 employees.
                            </p>
                            <ul style={{ padding: "0 40px" }}>
                                <li>
                                    Worked with SharePoint Platform to create Team site user-friendly
                                    applications creating an infrastructure for ease in corporate
                                    project communications across departments.
                                </li>
                                <li>
                                    Maintained and continually enhanced intranet web sites without
                                    management supervision. Refreshed the looks and recreated some of
                                    the training web sites, since old technology was used and outdated
                                    data was implemented.
                                </li>
                                <li>Wrote and published weekly newsletters action updates.</li>
                            </ul>
                        </div>
                        <div className="timeline-footer">
                            <p className="text-right">JANUARY 2010 - FEBRUARY 2012</p>
                        </div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-badge">
                        <a>
                            <i className="fa fa-circle invert" id="" />
                        </a>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>Front-End Web Developer - UI/UX Designer - IADC</h4>
                        </div>
                        <div className="timeline-body">
                            <p>
                                Responsible for development and support of corporate web sites
                                (IADC, DEA, Careers @ IADC, Drilling Contractor) all running on
                                Joomla CMS.
                            </p>
                            <ul style={{ padding: "0 40px" }}>
                                <li>
                                    Creating quarterly circulation reports based on data mining and
                                    analysis
                                </li>
                                <li>Responsible for subscription for Drilling Contractor</li>
                                <li>
                                    Creating newsletters for Drilling Contractor internationally.
                                </li>
                                <li>Creating Drill Bits newsletters for mobile viewers.</li>
                                <li>
                                    Integration of Subscription form into a web site via MYSQL + PHP
                                    within Joomla.
                                </li>
                            </ul>
                        </div>
                        <div className="timeline-footer">
                            <p className="text-right">JUNE 2006 - DECEMBER 2009</p>
                        </div>
                    </div>
                </li> */}
                <li className="clearfix no-float" />
            </ul>
        </>

    )
}

export default WorkExperienceTimeline