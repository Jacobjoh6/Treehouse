import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import './video.css'


function Video() {

  return (

    <div>
      <header>
        <Header />
      </header>
      <h1>VIDEOS</h1>
      <p>In this video you will learn how to climb trees</p>
      <div className="video-container">
        <video 
        controls 
        className="video">
          <source src="public/Climbing Trees - Small to Big.mp4" type="video/mp4"/>
          <track kind="captions" src='/subtitles.vtt' srcLang='sv' label='Swedish' />
        </video>
      </div>
      <p>If you want to learn mora about climbing trees <a href="https://www.youtube.com/results?search_query=how+to+climb+a+tree">Click here</a></p>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
  
  export default Video