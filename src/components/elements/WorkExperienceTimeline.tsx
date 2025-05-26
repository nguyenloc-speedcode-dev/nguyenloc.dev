'use client'

import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { useWorkExperienceData } from '@/constant/mockup'

const WorkExperienceTimeline = () => {
    const workExData = useWorkExperienceData()
    return (
        <>

            <ul className="timeline">
                {
                    workExData.map((i, index) => (
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
                                    <p className="text-right">
                                        {i.company_name} | {i.time}</p>
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