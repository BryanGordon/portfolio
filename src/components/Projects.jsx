import '../css/Projects.css'
import { IconBrandGithub } from '@tabler/icons-react'
import Bakery from '/bakery.webp'
// import ProjectsData from '../mocks/projects.json'
// import { useState, useEffect } from 'react'

export function Projects () {
/*
  const [data, setData] = useState([])

  const getData = () => {
    const info = ProjectsData
    setData(info)
  }

  useEffect(() => {
    getData()
  }, [])
*/
  return (
    <section className='section-projects'>
      <header>
        <h1>Projects</h1>
      </header>

      <article>
        <ul className='container-projects'>

          <li className='project'>
            <picture className='img-container-projects'>
              <a rel='noreferrer' href='#'>
                <img className='image-project' src={Bakery} alt='imagen' />
              </a>
            </picture>

            <div className='project-info-container'>
              <span className='project-title'>Bakery</span>
              <p className='description-project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit adipisci accusantium veritatis facere impedit delectus eaque culpa! Hic, expedita?</p>
            </div>
          </li>

          <li className='projects'>
            <div className='img-container-projects'>
              <a target='_blank' rel='noreferrer' href='#'>
                <img className='image-project' src={Bakery} alt='imagen' />
              </a>
            </div>

            <div className='project-info-container'>
              <span className='project-title'>Bakery</span>
              <p className='description-project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit adipisci accusantium veritatis facere impedit delectus eaque culpa! Hic, expedita?</p>
            </div>
          </li>

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
