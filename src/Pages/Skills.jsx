import React from 'react'
import html from '../assets/images/html-CKyDEyeN.png'
import css from '../assets/images/css-bLrZJUBe.png'
import javascript from '../assets/images/js-C4V7qKIs.png'
import Bootstrap from '../assets/images/bt-D4feuazP.png'
import Tailwind from '../assets/images/tailwind-DD1vGJRK.png'
import jquery from '../assets/images/jquery-DRWp9a80.webp'

import scss from '../assets/images/sass-CikPBs4p.png'
import Reactjs from '../assets/images/reactjs-DsFviqE6.png'
import redux from '../assets/images/redux-Ds5u9XDJ.png'
import nodejs from '../assets/images/nodejs-BXcG4YML.png'
import sql from '../assets/images/sql-B5xsbAN8.png'
import mangodb from '../assets/images/download.svg'


import php from '../assets/images/php-C_T_1uaO.png'
import laravel from '../assets/images/laravel-BaLrRZba.png'
import postman from '../assets/images/postman-w9vOutb2.svg'
import firebase from '../assets/images/firebase-B2gNsekD.png'
import Git from '../assets/images/git-D-GiNryt.png'
import github from '../assets/images/github-CKJQOwnD.png'


import gitlab from '../assets/images/gitlab-bWZQVPnm.png'
import api from '../assets/images/api-usxVFfZv.png'
import wordpress from '../assets/images/wordpress-DKXsAQ5N.png'
import magento from '../assets/images/magento-BkI6Esul.png'



const Skills = () => {
  return (
    <div>
      <div className="skill">
        <h4 className='text-light mt-5 text-center fs-2'>Skills</h4>
        <p className='text-light text-center fs-5 '>I actively seek out new and innovative technologies that are not only cutting-edge but also easy to learn and apply.</p>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-2 text-light skill-icons text-center">
            <img src={html} alt="" />
            <h5 className=' mt-2'>HTML</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={css} alt="" />
            <h5 className='mx-4 mt-2'>CSS</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={javascript} alt="" />
            <h5 className=' mt-2'>JAVASCRIPT</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={Bootstrap} alt="" />
            <h5 className=' mt-2'>BOOTSTRAP</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={Tailwind} alt="" />
            <h5 className=' mt-2'>TAILWIND</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={jquery} alt="" />
            <h5 className=' mt-2'>JQUERY</h5>
          </div>
        </div>
      </div>

      {/* -------------------------------------------- */}

      <div className="container">
        <div className="row my-5">
          <div className="col-lg-2 text-light skill-icons text-center">
            <img src={scss} alt="" />
            <h5 className=' mt-2'>scss</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={Reactjs} alt="" />
            <h5 className='mx-4 mt-2'>reactjs</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={redux} alt="" />
            <h5 className=' mt-2'>redux</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={nodejs} alt="" />
            <h5 className=' mt-2'>nodejs</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={sql} alt="" />
            <h5 className=' mt-2'>sql</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={mangodb} alt="" />
            <h5 className=' mt-2'>mangodb</h5>
          </div>
        </div>
      </div>

      
      {/* -------------------------------------------- */}

      <div className="container">
        <div className="row my-5">
          <div className="col-lg-2 text-light skill-icons text-center">
            <img src={php} alt="" />
            <h5 className=' mt-2'>php</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={laravel} alt="" />
            <h5 className='mx-4 mt-2'>laravel</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={postman} alt="" />
            <h5 className=' mt-2'>postman</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={firebase} alt="" />
            <h5 className=' mt-2'>firebase</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={Git} alt="" />
            <h5 className=' mt-2'>git</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={github} alt="" />
            <h5 className=' mt-2'>github</h5>
          </div>
        </div>
      </div>

      
      {/* -------------------------------------------- */}

      <div className="container">
        <div className="row my-5">
          <div className="col-lg-2 text-light skill-icons text-center">
            <img src={gitlab} alt="" />
            <h5 className=' mt-2'>gitlab</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={api} alt="" />
            <h5 className='mx-4 mt-2'>api</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={wordpress} alt="" />
            <h5 className=' mt-2'>worldpress</h5>
          </div>
          <div className="col-lg-2 text-light skill-icons">
            <img src={magento} alt="" />
            <h5 className=' mt-2'>magento</h5>
          </div>
         
        </div>
      </div>

    
    </div>
  )
}

export default Skills
