import React from 'react';
import port from '../assets/images/sahil-port-3.jpg';
import About from './About';

const HomeContent = () => {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 my-5 text-center text-lg-start home-con">
                        <h2>Hello, My Name is</h2>
                        <h1>Sahil Vaghela</h1>
                        <h3 className="typing-text text-light">
                            And, I am a <span></span>
                        </h3>
                        {/* Make sure the path to your resume file is correct */}
                        <a href="/path-to-your-resume-file.pdf" download="Sahil_Vaghela_Resume">
                            <button className="btn btn-danger mt-3">Download Resume</button>
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 p-4 text-center home-con">
                        <img src={port} className="rounded-pill img-fluid" alt="Sahil Vaghela" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
