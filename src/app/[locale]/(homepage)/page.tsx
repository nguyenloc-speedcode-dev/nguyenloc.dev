import ExperienceCard from '@/components/elements/ExperienceCard'
import ProfileCard from '@/components/elements/ProfileCard'
import ProjectsCard from '@/components/elements/ProjectsCard'
import SkillCard from '@/components/elements/SkillCard'
import React from 'react'

const HomePage = () => {
    return (
        <section className="home-area">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4">
                        <ProfileCard />
                    </div>
                    <div className="col-xl-4">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <ExperienceCard />
                            </div>
                            <div className="col-lg-12">
                               <SkillCard/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                     <ProjectsCard/>
                    </div>
                </div>
               
            </div>
        </section>

    )
}

export default HomePage