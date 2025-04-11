import React from 'react'
import wonder from '../assets/images/clothes website.png'
import timeout from '../assets/images/date.png'
import industry from '../assets/images/industryproject.png'
import sahara from '../assets/images/sahara.png'
import ecommerce from '../assets/images/ecommerce.png'
import nodejs from '../assets/images/nodejs.png'


import { NavLink } from 'react-router-dom'
const ProjectWork = () => {
  return (
    <div>
      <div className="container project-work">
        <h2 className='text-center my-5 text-light'>My Project</h2>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 my-3">
            <div className="card project">
              <img src={wonder} />
              <div className="card-body">
                <h4>Clothing Website</h4>
                <p className='my-3'>Explore stylish, high-quality clothing for every occasion. Trendy designs, comfortable fabrics, and affordable prices to elevate your wardrobe.</p>
                <h6 className='my-3'>HTML | CSS | BootStrap</h6>
                <div className="row">
                  <div className="col-lg-6 mt-3">
                    <NavLink to={'https://github.com/Sahil-0912/Clothing-website'} target="_blank" rel="noopener noreferrer">
                      <button className='btn btn-outline-danger w-75'>Github</button>
                    </NavLink>
                  </div>
                  <div className="col-lg-6 mt-3">
                    <NavLink to={'https://clothing-website-alpha.vercel.app/'} target="_blank" rel="noopener noreferrer">
                      <button className='btn btn-outline-danger w-75'>Live Demo</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 my-3">
            <div className="card project">
              <img src={timeout} />
              <div className="card-body">
                <h4>Digital Clock</h4>
                <p className='my-3'>A modern digital clock built with HTML, styled with CSS, and powered by JavaScript for dynamic real-time functionality and style</p>
                <h6 className='my-3'>HTML | CSS | BootStrap | Javascript</h6>
                <div className="row">
                  <div className="col-lg-6 mt-3">
                    <NavLink to={'https://github.com/Sahil-0912/digital-clock.git'} target="_blank" rel="noopener noreferrer">
                      <button className='btn btn-outline-danger w-75'>Github</button>
                    </NavLink>
                  </div>
                  <div className="col-lg-6 mt-3">
                    <button className='btn btn-outline-danger w-75'>Live Demo</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 my-3">
            <div className="card project">
              <img src={industry} />
              <div className="card-body">
                <h4>Student Teacher Book Appoitment</h4>
                <p className='my-3'>Book Appoitment Web Application with some cool
                  Features
                  • Admin management for adding, updating, and deleting teachers and approving student registrations.</p>
                <h6 className='my-3'>HTML | CSS | BootStrap | Javascript</h6>
                <div className="row">
                  <div className="col-lg-6 mt-3">
                    <button className='btn btn-outline-danger w-75'>Github</button>
                  </div>
                  <div className="col-lg-6 mt-3">
                    <button className='btn btn-outline-danger w-75'>Live Demo</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 my-3">
            <div className="card project">
              <img src={sahara} />
              <div className="card-body">
                <h4>Sahara Bus</h4>
                <p className='my-3'>Online bus ticket booking is a convenient service that allows users to search, select, and book bus tickets via websites Fast, reliable, and secure online bus
                  ticket booking platform.</p>
                <h6 className='my-3'>HTML | CSS | BootStrap | Javascript | React js</h6>
                <div className="row">
                  <div className="col-lg-6 mt-3">
                    <NavLink to={'https://github.com/Sahil-0912/Sahara-Travels'} target="_blank" rel="noopener noreferrer">
                      <button className='btn btn-outline-danger w-75'>Github</button>
                    </NavLink>
                  </div>
                  <div className="col-lg-6 mt-3">
                    <NavLink to={'https://sahara-bus.vercel.app/'} target="_blank" rel="noopener noreferrer">
                      <button className='btn btn-outline-danger w-75'>Live Demo</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 my-3">
            <div className="card project">
              <img src={ecommerce} />
              <div className="card-body">
                <h4>E-commerce Website</h4>
                <p className='my-3'>Book Appoitment Web Application with some cool
                  Features
                  • Admin management for adding, updating, and deleting teachers and approving student registrations.</p>
                <h6 className='my-3'>HTML | CSS | BootStrap | Javascript | React js</h6>
                <div className="row">
                  <div className="col-lg-6 mt-3">
                    <NavLink to={'https://github.com/Sahil-0912/SV-collection'} target="_blank" rel="noopener noreferrer">
                      <button className='btn btn-outline-danger w-75'>Github</button>
                    </NavLink>
                  </div>
                  <div className="col-lg-6 mt-3">
                    <NavLink to={'https://sv-collection.vercel.app/'} target="_blank" rel="noopener noreferrer">
                      <button className='btn btn-outline-danger w-75'>Live Demo</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 my-3">
            <div className="card project">
              <img src={nodejs} />
              <div className="card-body">
                <h4>Admin Dashboard</h4>
                <p className='my-3'>This Admin Dashboard is designed for seamless management of Categories, Subcategories, and Products, with full CRUD operations.Additionally, I used JWT for robust authentication and authorization, ensuring that only authorized users can access and perform specific actions.</p>
                <h6 className='my-3'>HTML | BootStrap | React js | Node js | MongoDB | Express js</h6>
                <div className="row">
                  <div className="col-lg-6 mt-3">
                    <NavLink to={'https://github.com/Sahil-0912/jwt'} target="_blank" rel="noopener noreferrer">
                      <button className='btn btn-outline-danger w-75'>Github</button>
                    </NavLink>
                  </div>
                  <div className="col-lg-6 mt-3">
                    <NavLink to={'https://jwt-3-7wsr.onrender.com/login'} target="_blank" rel="noopener noreferrer">
                      <button className='btn btn-outline-danger w-75'>Live Demo</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectWork
