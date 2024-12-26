import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <div className='row text-center'>
                <div className='col-12'>
                    <h1>404</h1>
                </div>
            </div>
            <div className="text-center row ">

                <div className=" col-12 mt-5">
                    <p className="fs-3">
                        {" "}
                        <span className="text-danger">Opps!</span> Page not found.
                    </p>
                    <p className="lead">The page you’re looking for doesn’t exist.</p>
                    <Link href="/" className="btn btn-primary">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default NotFound