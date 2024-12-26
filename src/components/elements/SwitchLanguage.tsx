
import React, { useEffect } from 'react'
import viFlag from '@/assets/icons/flags/vi.png'
import enFlag from '@/assets/icons/flags/en.png'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigate'



const SwitchLanguage = () => {
    const locale = useLocale()
    const router = useRouter()
    const pathName = usePathname()
    return (

        <div className="control-lang">
            <div className="flag">
                <div
                    style={{
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        const newLocale = locale === 'en' ? 'vi' : 'en';
                        router.push(pathName, { locale: newLocale })
                        typeof window !== 'undefined' && window.location.reload()
                    }}
                >
                    {
                        locale === 'en' ? <Image src={viFlag} alt="Vietnamese" width={24} height={24} />
                            :
                            <Image src={enFlag} alt="Vietnamese" width={24} height={24} />
                    }

                </div>
                <div className="d-block d-xl-none lang-text ">
                    Change lang
                </div>
            </div>

        </div >
    )
}

export default SwitchLanguage