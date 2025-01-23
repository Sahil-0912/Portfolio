import React from 'react';
import html from '../assets/images/html-CKyDEyeN.png';
import css from '../assets/images/css-bLrZJUBe.png';
import javascript from '../assets/images/js-C4V7qKIs.png';
import Bootstrap from '../assets/images/bt-D4feuazP.png';
import Tailwind from '../assets/images/tailwind-DD1vGJRK.png';
import jquery from '../assets/images/jquery-DRWp9a80.webp';
import scss from '../assets/images/sass-CikPBs4p.png';
import Reactjs from '../assets/images/reactjs-DsFviqE6.png';
import redux from '../assets/images/redux-Ds5u9XDJ.png';
import nodejs from '../assets/images/nodejs-BXcG4YML.png';
import sql from '../assets/images/sql-B5xsbAN8.png';
import mangodb from '../assets/images/download.svg';
import php from '../assets/images/php-C_T_1uaO.png';
import laravel from '../assets/images/laravel-BaLrRZba.png';
import postman from '../assets/images/postman-w9vOutb2.svg';
import firebase from '../assets/images/firebase-B2gNsekD.png';
import Git from '../assets/images/git-D-GiNryt.png';
import github from '../assets/images/github-CKJQOwnD.png';
import gitlab from '../assets/images/gitlab-bWZQVPnm.png';
import api from '../assets/images/api-usxVFfZv.png';
import wordpress from '../assets/images/wordpress-DKXsAQ5N.png';
import magento from '../assets/images/magento-BkI6Esul.png';

const skills = [
  { name: 'HTML', image: html },
  { name: 'CSS', image: css },
  { name: 'JavaScript', image: javascript },
  { name: 'Bootstrap', image: Bootstrap },
  { name: 'Tailwind', image: Tailwind },
  { name: 'jQuery', image: jquery },
  { name: 'SCSS', image: scss },
  { name: 'ReactJS', image: Reactjs },
  { name: 'Redux', image: redux },
  { name: 'NodeJS', image: nodejs },
  { name: 'SQL', image: sql },
  { name: 'MongoDB', image: mangodb },
  { name: 'PHP', image: php },
  { name: 'Laravel', image: laravel },
  { name: 'Postman', image: postman },
  { name: 'Firebase', image: firebase },
  { name: 'Git', image: Git },
  { name: 'GitHub', image: github },
  { name: 'GitLab', image: gitlab },
  { name: 'API', image: api },
  { name: 'WordPress', image: wordpress },
  { name: 'Magento', image: magento },
];

const Skills = () => {
  return (
    <div>
      <div className="skill text-center">
        <h2 className="text-light mt-5 fs-2">Skills</h2>
        <p className="text-light fs-5">
          I actively seek out new and innovative technologies that are not only cutting-edge but also easy to learn and apply.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 my-5">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 text-center skill-icons">
              <img src={skill.image} alt={`${skill.name} logo`} className="img-fluid" />
              <h5 className="mt-2 text-light">{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
