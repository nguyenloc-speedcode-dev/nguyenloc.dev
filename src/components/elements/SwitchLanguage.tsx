
import React, { useEffect, useState } from 'react'
import viFlag from '@/assets/icons/flags/vi.png'
import enFlag from '@/assets/icons/flags/en.png'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigate'
import clsx from 'clsx'



const SwitchLanguage = () => {
    const locale = useLocale()
    const router = useRouter()
    const [isShow, setIsShow] = useState(false)
    const pathName = usePathname()


    return (



        <div className="control-lang" onMouseMove={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            <div className="flag"

            >
                <div
                    style={{
                        cursor: "pointer"
                    }}

                >
                    {
                        locale === 'vi' ? <Image src={viFlag} alt="Vietnamese" width={24} height={24} />
                            :
                            <Image src={enFlag} alt="English" width={24} height={24} />
                    }

                </div>
                <div className="d-block d-xl-none lang-text ">
                    Change lang
                </div>
            </div>
            <ul className={clsx("dropdown-menu", {
                "d-block": isShow
            })}
                onMouseLeave={() => setIsShow(false)}
            >
                <li><div className="dropdown-item"
                    onClick={() => {
                        router.push(pathName, { locale: 'en' })
                        typeof window !== 'undefined' && window.location.reload()
                    }}
                >
                    <Image src={enFlag} alt="English" width={24} height={24} />
                    English
                </div></li>
                <li><div className="dropdown-item"
                    onClick={() => {
                        router.push(pathName, { locale: 'vi' })
                        typeof window !== 'undefined' && window.location.reload()
                    }}
                >
                    <Image src={viFlag} alt="Vietnamese" width={24} height={24} />
                    <span>Vietnamese</span>
                </div></li>

            </ul>
        </div >

    )
}

export default SwitchLanguage