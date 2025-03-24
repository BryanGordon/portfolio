import '../css/Cv.css'

export function PersonalInformation () {
  return (
    <section className='section-cv'>
      <header>
        <h1>Personal information</h1>
      </header>

      <article className='container-titles'>
        <h2>Experience</h2>

        <div>
          <p className='answer'> <span className='cv-titles'>+3 years of experience</span> development personal projects and working with customers.</p>
        </div>
      </article>

      <article className='container-titles'>
        <h2>Basic information</h2>
        <div className='container-per'>
          <span className='cv-titles'>Full name: </span>
          <p className='answer'>Bryan Armando Gordon Echeverria </p>
        </div>

        <div className='container-per'>
          <span className='cv-titles'>Address: </span>
          <p className='answer'>Cotacachi - Imbabura - Ecuador</p>
        </div>

        <div className='container-per'>
          <span className='cv-titles'>Email: </span>
          <p className='answer'>bryanbge92@gmail.com / bryanbge98@outlook.com</p>
        </div>
      </article>

      <article className='container-titles'>
        <h2>Certifications</h2>

        <div>
          <span className='cv-titles'>Udemy: </span>
          <p className='answer'>Aprende React + firebase 2021 (6.5 hours) [2021]</p>

          <div>
            <p>Programa tus primeros juegos HTML5 con Javascript (8.5 hours) [2020]</p>
            <p>Aprende a desarrollar videojuegos con unity 2021 (5.5 hours) [2021]</p>
            <p>TailwindCSS from A to Z: Master TailwindCSS Quickly (1.5 hours) [2024]</p>
            <p>Aprende Vue + Firebase Actualizado 2020 (6 hours) [2025]</p>
            <p>Svelte desde cero (18 hours) [2025]</p>
          </div>
        </div>

        <div>
          <span className='cv-titles'>University: </span>
          <p className='answer'>V Jornadas académicas internacionales y I congreso internacional de ciencias de la computación (24 hours) [2018]</p>

          <div>
            <p>Encuentro internacional tendencias de la inteligencia artificial [2020]</p>
            <p>Medios digitales (20 hours) [2020]</p>
          </div>
        </div>

        <div className='container-per'>
          <span className='cv-titles'>Cisco: </span>
          <p className='answer'>Introducción a la Seguridad Cibernética de Cisco Networking Academy [2020]</p>
        </div>

        <div className='container-per'>
          <span className='cv-titles'>Platzi: </span>
          <p className='answer'>Testing de videojuegos [2021]</p>
        </div>

        <div>
          <span className='cv-titles'>Domestika: </span>
          <p className='answer'>Introducción a Unity para videojuegos 2D (10 hours) [2021]</p>
        </div>

      </article>

      <article className='container-titles'>
        <h2>Studies</h2>

        <div className='container-per'>
          <span className='cv-titles'>Elementary School: </span>
          <p className='answer'>Virgen del Rosario (Spain)</p>
        </div>

        <div>
          <span className='cv-titles'>Middle School: </span>
          <p className='answer'>I.E.S Sierra de Guadarrama (Spain) [1 year]</p>

          <div>
            <p>U.E Las Lomas (Ecuador) [2 years]</p>
          </div>
        </div>

        <div className='container-per'>
          <span className='cv-titles'>High School: </span>
          <p className='answer'>U.E Las Lomas [3 years]</p>
        </div>

        <div>
          <span className='cv-titles'>University: </span>
          <p className='answer'>Software Engineering - Universidad Técnica del Norte</p>
        </div>
      </article>

    </section>
  )
}
