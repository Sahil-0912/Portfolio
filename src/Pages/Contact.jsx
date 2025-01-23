import React from 'react'
import { MdEmail } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className="information text-center my-5" data-aos="fade-up">
        <h2 className='text-light'>Contact Me</h2>
        <div className="container my-4">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
              <div className="card">
                <i class="fa-solid fa-envelope my-4"></i>
                <div className="card-body">
                  <p>sahilvaghela975@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <i class="fa-solid fa-phone my-4"></i>
                <div className="card-body">
                  <p>+917621922538</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <a href='https://github.com/Sahil-0912'><i class="fa-brands fa-github my-4"></i></a>
                <div className="card-body">
                  <p>Sahil-0912</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <a href='https://www.linkedin.com/in/sahil-vaghela-0702862b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='blank'><i class="fa-brands fa-linkedin my-4"></i></a>
                <div className="card-body">
                  <p>sahil vaghela</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
