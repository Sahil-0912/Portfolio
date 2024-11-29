import React from 'react'
import port from '../assets/images/sahil-port.jpg'
import About from './About'
const HomeContent = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 my-5 home-con">
                        <h2>Hello, My Name is</h2>
                        <h1>Sahil Vaghela</h1>
                        <h3 className='typing-text text-light'> And , I am a <span></span></h3>
                        <button className='btn btn-danger mt-3'>Download Resume</button>
                    </div>
                    <div className="col-lg-6 p-4 home-con">
                        <img src={port} className='rounded-pill' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent
