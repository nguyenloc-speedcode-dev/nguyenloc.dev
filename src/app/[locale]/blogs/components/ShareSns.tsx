'use client'

import React from 'react'
import { FacebookShareButton, LinkedinShareButton, PinterestShareButton, TwitterShareButton } from 'react-share'

interface Props {
    media: string,

}

const ShareSns = ({ media }: Props) => {

    const url = window?.location?.href



    return (
        <div className="social-media-icon mt-0">

            <ul className="list-unstyled">
                <li>
                    <a href="#">
                        <FacebookShareButton
                            url={url || ''}
                        >
                            <i className="fab fa-facebook" />
                        </FacebookShareButton>

                    </a>
                </li>
                <li>
                    <a href="#">
                        <PinterestShareButton url={url || ''} media={media}>
                            <i className="fab fa-pinterest" />
                        </PinterestShareButton>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <TwitterShareButton url={url || ''}>
                            <i className="fab fa-twitter" />
                        </TwitterShareButton>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <LinkedinShareButton url={url || ''}>
                            <i className="fab fa-linkedin" />
                        </LinkedinShareButton>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ShareSns