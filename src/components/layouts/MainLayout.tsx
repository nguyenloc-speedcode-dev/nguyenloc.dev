'use client'

import React, { useEffect} from 'react'
import MainHeader from './MainHeader'
import { useStore } from '@/store/useStore'
import MainFooter from './MainFooter'
import ProfileCard from '../elements/ProfileCard'
import { usePathname } from 'next/navigation'

interface Props {
    children: React.ReactNode;
    theme?: boolean
}

const MainLayout: React.FC<Props> = ({ children, theme }) => {
    const pathname = usePathname()
    const { toggleDarkMode } = useStore()

    useEffect(() => {
        if (theme) {
            toggleDarkMode(theme)
        }

    }, [theme])



    return (
        <div id="page-content">
            <MainHeader />
            <main>
                <section className="content-box-area mt-4">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4">
                                <ProfileCard />
                            </div>
                            {children}
                        </div>
                    </div>
                </section>

            </main>
            <MainFooter />
        </div>
    )
}

export default MainLayout