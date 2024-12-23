'use client'

import React, { useEffect, useState } from 'react'
import MainHeader from './MainHeader'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useStore } from '@/store/useStore'
import MainFooter from './MainFooter'

interface Props {
    children: React.ReactNode;
    theme?: boolean
}

const MainLayout: React.FC<Props> = ({ children, theme }) => {

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
                {children}
            </main>
            <MainFooter />
        </div>
    )
}

export default MainLayout