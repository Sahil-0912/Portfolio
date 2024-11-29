import React from 'react'
import ProjectData from '../Layouts/ProjectData';
import ProjectCardUi from '../Layouts/ProjectCardUi';

const ProjectWork = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <h4 className='text-light mt-5 text-center fs-2'>Projects</h4>
          {ProjectData.map((element) => {
            return (
              <div className="col-lg-4">
                <ProjectCardUi
                  title={element.title}
                  para={element.para}
                  image={element.image}
                  link={element.link}
                  icon={element.icon}
                ></ProjectCardUi>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectWork
