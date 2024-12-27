import { getRelatedPostbySlug } from '@/blogs'
import { IBlog } from '@/interface/blogs'
import { notFound } from 'next/navigation'
import React from 'react'
import BlogCard from './BlogCard'

const getRelatedPost = async (slug: string) => {
    try {
        const posts = await getRelatedPostbySlug(slug)
        return posts
    } catch (error) {
        notFound()
    }
}

const RelatedPost = async ({ category }: { category: string }) => {
    const data = await getRelatedPost(category) as Array<IBlog>

    return (
        <div className="related-post">
            <h2 className="main-common-title">Related Post</h2>
            <div className="row g-4">
                {
                    data.map((i, index) => (
                        <div className="col-md-6" key={index}>
                            <BlogCard post={i} />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default RelatedPost