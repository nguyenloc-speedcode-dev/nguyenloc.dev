import { getPostBySlug } from '@/blogs'
import { IBlog } from '@/interface/blogs'
import { notFound } from 'next/navigation'
import React from 'react'
import RelatedPost from '../components/RelatedPost'
import { Metadata, ResolvingMetadata } from 'next'
import ShareSns from '../components/ShareSns'


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
        <>
            <div className="col-xl-8">
                <div className="card content-box-card">
                    <div className="card-body portfolio-card article-details-card">
                        <div className="article-details-area">
                            {/* <div className="main-image">
                                        <img
                                            src={blog?.data?.img}
                                            alt="blog-img-1"
                                            className="img-fluid w-100"
                                        />
                                    </div> */}

                            <div className="article-details-text">
                                <h1 className="main-title fw-bold fs-1">
                                    {blog?.data?.title}
                                </h1>
                                <hr className='bg-light' style={{
                                    borderTop: "1px solid #aaaa"
                                }} />
                                <div className="d-flex gap-2 fst-italic" style={{
                                    color: "#aaa",
                                    fontSize: "13px"
                                }}>
                                    <div>Ngày đăng {blog?.data?.date}</div>
                                    <div>|</div>
                                    <div>{Math.floor(Math.random() * 6) + 1} views</div>
                                    <div>|</div>
                                    <div>Tác giả : Nguyễn Lộc</div>
                                </div>
                                <hr style={{
                                    borderTop: "1px solid #aaaa"
                                }} />
                                <div className='content-post lh-lg' dangerouslySetInnerHTML={
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
                                        <ShareSns
                                            media={blog?.data?.img as string}

                                        />
                                    </div>
                                </div>
                                <RelatedPost
                                    category={blog?.data?.category || ""}
                                    blog={blog}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Article