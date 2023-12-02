import './Home.css'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Home() {

    const navigate = useNavigate()

    return (
  
        <div>
            <header>
                <Header />
            </header>
            <h1 className='home-h1'>Escape reality</h1>
            
            <div className='img-div'>
                <img src="public/08-night.jpg" className='homepage-img' alt="homepage-img" />
            </div>
            <h2 className='home-h2'>Go rural</h2>
            <section className='home-section'>
                <article className='home-article'>
                    <p className='home-article__p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cupiditate accusamus 
                    recusandae earum 
                    </p>
                    <button className='home-article__btn' onClick={() => navigate('/rooms')}>Rooms</button>
                </article>
                <article className='home-article'>
                    <p className='home-article__p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cupiditate accusamus 
                    recusandae earum 
                    </p>
                    <button className='home-article__btn' onClick={() => navigate('/video')}>Video</button>
                </article>
                <article className='home-article'>
                    <p className='home-article__p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cupiditate accusamus 
                    recusandae earum 
                    </p>
                    <button className='home-article__btn' > <a className='home-link' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Surprise</a></button>
                </article>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
  
    )
  }
  
  export default Home