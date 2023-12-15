import './Rooms.css'
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

function Rooms() {

  function myAlert() {
    alert("Sorry, it is not yet poossible to book a room :/")
}

  return (

    <div>
      <header>
          <Header />
      </header>
        <section className="room-container">
          <section className="room">
            <div className="img-container">
              <img src="public/03-day.jpg" className="room-img" alt="a view from a white bed overlooking a lake in the morning" />
            </div>
            <div className="room-text-container">
              <p className='room-text'>Lorem ipsum dolor sit amet conullam. Nobis, reprehenderit cupiditate rem consequuntur nisi velit.</p>
              <button className='room-btn' onClick={myAlert}>BOOK</button>
            </div>
          </section>
          <section className="room">
            <div className="img-container">
              <img src="public/08-night.jpg" className="room-img" alt="A livingroom at noon overlooking a fireplace and a lake" />
            </div>
            <div className="room-text-container">
              <p className='room-text'>Lorem ipsum dolor sit amet conullam. Nobis, reprehenderit cupiditate rem consequuntur nisi velit.</p>
              <button className='room-btn' onClick={myAlert}>BOOK</button>
            </div>
          </section>
          <section className="room">
            <div className="img-container">
              <img src="public/09-night.jpg" className="room-img" alt="A outside view of a wooden deck with furniture overlooking a lake at sunrise" />
            </div>
            <div className="room-text-container">
              <p className='room-text'>Lorem ipsum dolor sit amet conullam. Nobis, reprehenderit cupiditate rem consequuntur nisi velit.</p>
              <button className='room-btn' onClick={myAlert}>BOOK</button>
            </div>
          </section>
        </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
  
  export default Rooms
