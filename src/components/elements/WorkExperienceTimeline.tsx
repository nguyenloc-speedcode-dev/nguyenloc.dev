'use client'

import React, { useTransition } from 'react'

import tikatika from '@/assets/logo/tikatika-logo.png'
import playground from "@/assets/logo/playground.png"
import hopper from '@/assets/logo/hopper.png'
import clsx from 'clsx'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const WorkExperienceTimeline = () => {
    const exTrans = useTranslations('experience')

    const workExperienceData = [
        {
            title: "Web App Developer",
            company_name: "HOPPER VN",
            avat_company: hopper,
            time: "09/2023 - 11/2024",
            contents: [
                exTrans('hopper_line_1'),
                exTrans('hopper_line_2'),
                exTrans('hopper_line_3'),
            ]
        },
        {
            title: "Web App Developer",
            company_name: "PLAYGROUND",
            avat_company: playground,
            time: "12/2021 - 09/2023",
            contents: [
                exTrans('playground_line_1'),
                exTrans('playground_line_2'),
                exTrans('playground_line_3'),
                exTrans('playground_line_4'),

            ]
        },
        {
            title: "Web App Developer",
            company_name: "TIKATIKA",
            avat_company: tikatika,
            time: "8/2021 - 10/2021",
            contents: [
                exTrans('tikatika_line_1'),
                exTrans('tikatika_line_2'),
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


                <li className="clearfix no-float" />
            </ul>
        </>

    )
}

export default WorkExperienceTimeline