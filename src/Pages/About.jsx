import React from 'react'
import aboutgif from '../assets/images/about-gif-tran.gif'
const About = () => {
    return (
        <div className='about-con'>
            <h2 className="text-light text-center mt-3">About Me</h2>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6  my-3">
                        <img src={aboutgif} />
                    </div>
                    <div className="col-12 col-md-6  my-5">
                        <p className='text-light'>I have recently completed graduation Bachelor of Computer Application from Indus University, My career objective is to secure a challenging and dynamic position in a reputed organization, where I can utilized my skills and knowledge to grow professionally.</p>

                        <ul className="about-info mt-4 px-md=0 px-2 text-light">
                            <li className="d-flex text-light">
                                <span>Name:</span>
                                <span className='pos'>sahil</span>

                            </li>
                            <li className="d-flex text-light">
                                <span>Date of Birth</span>
                                <span className='pos6'>09-12-2002</span>

                            </li>
                            <li className="d-flex text-light">
                                <span>Address:</span>
                                <span className='pos2'>Isanpur,Ahmedabad</span>

                            </li>
                            <li className="d-flex text-light">
                                <span>Zip-code:</span>
                                <span className='pos3'>382443</span>
                            </li>
                            <li className="d-flex text-light">
                                <span>Email:</span>
                                <span className='pos4'>sahilvaghela975@gmail.com</span>
                            </li>
                            <li className="d-flex text-light">
                                <span>Phoneno:</span>
                                <span className='pos5'>7621922538</span>
                            </li>
                            <li className="text-light eduaction mt-4">
                                <h3 className='fs-4'>EDUCATION</h3>

                                <h6>Full Stack Web Developer</h6>
                                <h5 className='fs-4'>Bachelor Computer Application</h5>
                                <h6>Indus Univercity,2024</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
