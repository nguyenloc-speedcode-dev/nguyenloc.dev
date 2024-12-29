import { getPostBySlug, getRelatedPostbySlug } from '@/blogs'
import ProfileCard from '@/components/elements/ProfileCard'
import { IBlog } from '@/interface/blogs'
import { data } from 'autoprefixer'
import { notFound } from 'next/navigation'
import React from 'react'
import RelatedPost from '../components/RelatedPost'
import { Metadata, ResolvingMetadata } from 'next'


type Props = {
    params: Promise<{ articleId: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const getBlog = async (slug: string) => {
    try {
        const blog = await getPostBySlug(slug)
        if (!blog) return notFound()
        return blog
    } catch (error) {
        notFound()
    }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const articleId = (await params).articleId
    const blog = await getBlog(articleId)
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: blog.data.title,
        description: blog.data.description_short,
        keywords: blog.data.key,
        openGraph: {
            images: [`${blog.data.img}`, ...previousImages],
        },
    }
}


const Article = async ({
    params
}: {
    params: { articleId: string }
}) => {
    const { articleId } = params

    if (!articleId) return notFound()

    const blog = await getBlog(articleId) as IBlog


    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4">
                        <ProfileCard />
                    </div>
                    <div className="col-xl-8">
                        <div className="card content-box-card">
                            <div className="card-body portfolio-card article-details-card">
                                <div className="article-details-area">
                                    <div className="main-image">
                                        <img
                                            src={blog?.data?.img}
                                            alt="blog-img-1"
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                    <ul className="list-unstyled article-tags">
                                        <li>15 min read</li>
                                        <li>Nov 6, 2023</li>
                                        <li>1.5k Views</li>
                                    </ul>
                                    <div className="article-details-text">
                                        <h1 className="main-title">
                                            {blog?.data?.title}
                                        </h1>
                                        <div className='content-post' dangerouslySetInnerHTML={
                                            {
                                                __html: blog?.content
                                            }
                                        }>

                                        </div>

                                        <div className="tags-and-share">
                                            <div className="tags">
                                                <h3 className="title">Tags:</h3>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <a href="#">{blog?.data?.category}</a>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="share">
                                                <h3 className="title">Share:</h3>
                                                <div className="social-media-icon mt-0">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-facebook" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-pinterest" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-github" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fab fa-youtube" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <RelatedPost category={blog?.data?.category || ""} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Article