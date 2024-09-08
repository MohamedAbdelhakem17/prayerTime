import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav id="nav">
                <div className="container d-flex align-items-center justify-content-between py-2 ">
                    <div className="logo d-flex align-items-center justify-content-between justify-content-md-center mb-2 pt-2 px-2">
                        <h1>أَقرَأَ</h1>
                    </div>
                    <ul className="menu list-unstyled m-0">
                        <li className='h1 fw-bolder' >
                            مواقيت الصلاة
                        </li>
                    </ul>
                </div>
            </nav></>
    )
}

export default Navbar