import '../css/Projects.css'
import { IconBrandGithub } from '@tabler/icons-react'

import ProjectsData from '../mocks/projects.json'
import { useState, useEffect } from 'react'

export function Projects () {
  const [data, setData] = useState([])

  const getData = () => {
    const info = ProjectsData
    setData(info)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className='section-projects'>
      <header>
        <h1>Projects</h1>
      </header>

      <article>
        <ul className='container-projects'>

          {
            data.map((item) => (
              <li key={item.titleProject} className='project'>
                <picture className='img-container-projects'>
                  <a target='_blank' rel='noreferrer' href={item.linkProject}>
                    <img className='image-project' src={item.imageProject} alt={item.projectAlt} />
                  </a>
                </picture>

                <div className='project-info-container'>
                  <span className='project-title'>{item.titleProject}</span>
                  <p className='description-project'>{item.descriptionProject}</p>
                  <span id='mark-tec' className='description-project'>{item.devTecs}</span>
                </div>
              </li>
            ))
          }
        </ul>
      </article>

      <article className='more-info'>
        <p>
          If you want see all my projects, you can click the icon next to
          <a target='_blank' rel='noreferrer' href='https://github.com/BryanGordon'>
            <IconBrandGithub className='icon-pro' />
          </a>
        </p>
      </article>
    </section>
  )
}
