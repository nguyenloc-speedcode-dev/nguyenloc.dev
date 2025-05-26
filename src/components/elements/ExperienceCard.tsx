import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useWorkExperienceData } from '@/constant/mockup'

const ExperienceCard = () => {
    const t = useTranslations()
    const experienceData = useWorkExperienceData()
    return (
        <div className="card">
            <div className="card-body work-experiance-card">
                <h3 className="card-title">{t('heading.work_experience')}</h3>
                <div className="work-experiance-main">
                    <ul className="work-experiance-slider list-unstyled">
                        {
                            experienceData.map((i, index) => (
                                <li key={index}>
                                    <div className="date">
                                        <p>{i.time}</p>
                                    </div>
                                    <div className="info">
                                        <div className="">
                                            <Image src={i.avat_company} alt={i.title} width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h4 className="title">{i.title}</h4>
                                            <h6 className="subtitle">{i.time}</h6>
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
                                        <p>{i.time}</p>
                                    </div>
                                    <div className="info">
                                        <div className="">
                                            <Image src={i.avat_company} alt="Tikatika" width={40} height={40} />
                                        </div>
                                        <div className="text">
                                            <h4 className="title">{i.title}</h4>
                                            <h6 className="subtitle">{i.title}</h6>
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