import './rooms.css'
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

function Checkout() {

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
              <img src="public/03-day.jpg" className="room-img" alt="room1-bedroom" />
            </div>
            <div className="room-text-container">
              <p className='room-text'>Lorem ipsum dolor sit amet conullam. Nobis, reprehenderit cupiditate rem consequuntur nisi velit.</p>
              <button className='room-btn' onClick={myAlert}>BOOK</button>
            </div>
          </section>
          <section className="room">
            <div className="img-container">
              <img src="public/08-night.jpg" className="room-img" alt="room2-living-room" />
            </div>
            <div className="room-text-container">
              <p className='room-text'>Lorem ipsum dolor sit amet conullam. Nobis, reprehenderit cupiditate rem consequuntur nisi velit.</p>
              <button className='room-btn' onClick={myAlert}>BOOK</button>
            </div>
          </section>
          <section className="room">
            <div className="img-container">
              <img src="public/09-night.jpg" className="room-img" alt="room3-deck" />
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
  
  export default Checkout