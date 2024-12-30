import { IBlog } from '@/interface/blogs'
import { ROUTES } from '@/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ post }: {
    post: IBlog
}) => {
    return (
        <div className="article-publications-item">
            <div className="image">
                <Link href={ROUTES.BLOGS + `/${post?.data?.slug}`} className="d-block w-100">
                    <Image
                        src={post?.data?.img as string}
                        alt="blog-img-1"
                        className="img-fluid w-100"
                        width={312}
                        height={208}
                    />
                </Link>
                <Link href={ROUTES.BLOGS + '/121'} className="tags">
                    <div>{post?.data?.category}</div>
                </Link>

            </div>
            <div className="text">
                <Link href={ROUTES.BLOGS + `/${post?.data?.slug}`} className="title">
                    {post.data.title}
                </Link>
                <ul className="list-unstyled">
                    <li>{post.data.date}</li>
                </ul>
            </div>
        </div>
    )
}

export default BlogCard