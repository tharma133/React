import { data } from './data'

function App() {
  return (
    <main>
      <div className='header'>
        <h1>React Projects</h1>
        <div className='underline'></div>
      </div>
      <div className='section-center'>
        {data.map((item) => {
          const { id, image, link, title } = item
          return (
            <a
              href={link}
              key={id}
              className='container'
              rel='noreferrer'
              target='_blank'
            >
              <div className='image-wrapper'>
                <img src={image} alt={title} />
              </div>
              <footer>
                <h2 className='name'>{title}</h2>
              </footer>
            </a>
          )
        })}
      </div>
    </main>
  )
}

export default App
