'use client'


import clsx from 'clsx'
import React from 'react'
import IframeComponent from './IframeComponent'

interface Props {
    onClose: () => void,
    linkIframe: string | boolean
}

const ReviewProject = ({ onClose, linkIframe }: Props) => {

    return (
        <div className='review-project'>
            <div className={clsx('wrap-iframe ', {
                'active': linkIframe
            })}>
                <div className='overplay' />
                <div className='wrap-iframe_body'>
                    <div className='close-iframe'
                        onClick={onClose}
                    >
                        <svg height={32} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"
                                fill="#1bc1c1"
                            />
                            <path d="M0 0h48v48h-48z" fill="none" />
                        </svg>

                    </div>
                    {
                        linkIframe && <IframeComponent linkIframe={linkIframe.toString()} />
                    }


                </div>

            </div>
        </div>
    )
}

export default ReviewProject