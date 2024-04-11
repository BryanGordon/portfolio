import '../css/Projects.css'
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
                <p className='description-project'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus esse quaerat totam, et voluptate iusto ipsa, mollitia perspiciatis sapiente autem atque rerum sit, dicta ipsum iure exercitationem voluptas blanditiis officia!</p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
