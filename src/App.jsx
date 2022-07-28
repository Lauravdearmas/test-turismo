
import './App.css'
import FooterTest from '../src/Components/footer'
import NavTest from '../src/Components/header'
import OfferTest from '../src/Components/offer'



function App() {
  

  return (
    <div className="App">
      <NavTest />

      <div className='menu-offers-container'>
          <div>
            <h2>Offers</h2> 
          </div>
          <div>
            <div>
              <OfferTest />
              <div className='search-bar'>
                <input className='' type="text" />
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