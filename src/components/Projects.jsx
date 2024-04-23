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
      <h1>Projects</h1>
      <div className='projects-content'>
        <ul className='container-projects'>
          {
            data.map((item) => (
              <li className='projects' key={item.titleProject}>
                <div className='img-container-projects'>
                  <a target='_blank' rel='noreferrer' href={item.linkProject}>
                    <img className='image-project' src={item.imageProject} alt={item.projectAlt} />
                  </a>
                </div>
                <label className='project-title'>{item.titleProject}</label>
                <p className='description-project'>{item.description}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <p className='more-info'>
        If you want see all my projects, you can click the icon next to
        <a target='_blank' rel='noreferrer' href='https://github.com/BryanGordon'>
          <IconBrandGithub className='icon-pro' />
        </a>
      </p>
    </section>
  )
}
