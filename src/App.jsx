
import './App.css'
import FooterTest from '../src/Components/footer'
import NavTest from '../src/Components/header'
import OfferTest from '../src/Components/offer'



function App() {
  

  return (
    <div className="App">
      <NavTest />

      <div className='menu-offers-container'>
          <div className='container-title-offer'>
            <h2 className="title-offers">Offers</h2> 
            <div className='line-offers'>
              
            </div>
          </div>
          <div className='container-general-menu'>
            <div className='first-container-offers'>
              <OfferTest />
              <div className='search-bar'>
                <input className='search-box' type="text" />
                <div className="line"></div>
                <label>Chosen destination</label>
              </div>
            </div>
            <div className='menu'>
              <div>
                <h2>Menú</h2>
                <ul>
                  <li className='list-item-menu'>
                    <a href='/' className='link-item-menu'>Check-in</a>
                  </li>
                  <li  className='list-item-menu'>
                    <a href='/' className='link-item-menu'>Manage My Booking</a>
                  </li>
                  <li  className='list-item-menu'>
                    <a href='/' className='link-item-menu'>Search</a>
                  </li>
                  <li  className='list-item-menu'>
                    <a href='/' className='link-item-menu'>Destinations</a>
                  </li>
                  <li  className='list-item-menu'>
                    <a href='/' className='link-item-menu'>Members</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>


      <FooterTest />        
    </div>
  )
}

export default App