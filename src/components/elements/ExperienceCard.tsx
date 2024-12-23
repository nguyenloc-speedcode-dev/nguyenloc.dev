import React from 'react'

import tikatika from '@/assets/logo/tikatika-logo.png'
import playground from "@/assets/logo/playground.png"
import hopper from '@/assets/logo/hopper.png'

import Image from 'next/image'

const ExperienceCard = () => {
    const experienceData = [
        {
            date: "8/2021 - 10/2021",
            logo_company: tikatika,
            title: "TIKATIKA",
            description: "Web Developer"
        },
        {
            date: "09/2023 - 11/2024",
            logo_company: hopper,
            title: "HOPPER VN",
            description: "Web Developer "
        },
        {
            date: "12/2021 - 09/2023",
            logo_company: playground,
            title: "PLAYGROUND",
            description: "Web Developer "
        }
    ]
    return (
        <div className="card">
            <div className="card-body work-experiance-card">
                <h3 className="card-title">Work Experience</h3>
                <div className="work-experiance-main">
                    <ul className="work-experiance-slider list-unstyled">
                        {
                            experienceData.map((i, index) => (
                                <li key={index}>
                                    <div className="date">
                                        <p>{i.date}</p>
                                    </div>
                                    <div className="info">
                                        <div className="">
                                            <Image src={i.logo_company} alt={i.title + i.description} width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h4 className="title">{i.title}</h4>
                                            <h6 className="subtitle">{i.description}</h6>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="work-experiance-slider list-unstyled">
                        {
                            experienceData.map((i, index) => (
                                <li key={index}>
                                    <div className="date">
                                        <p>{i.date}</p>
                                    </div>
                                    <div className="info">
                                        <div className="">
                                            <Image src={i.logo_company} alt="Tikatika" width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h4 className="title">{i.title}</h4>
                                            <h6 className="subtitle">{i.description}</h6>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default ExperienceCard