'use client'

import ExperienceCard from '@/components/elements/ExperienceCard'
import ProjectsCard from '@/components/elements/ProjectsCard'
import SkillCard from '@/components/elements/SkillCard'
import { useTranslations } from 'next-intl'
import React from 'react'

const HomePage = () => {
    const t = useTranslations()
    return (
        <>
            <div className="col-lg-4">
                <div className="row g-4">
                    <div className="col-lg-12">
                        <ExperienceCard />
                    </div>
                    <div className="col-lg-12">
                        <SkillCard />
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <ProjectsCard />
            </div>
        </>

    )
}

export default HomePage