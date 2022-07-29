
import './App.css'
import FooterTest from '../src/Components/footer'
import NavTest from '../src/Components/header'
import OfferTest from '../src/Components/offer'
import { VscTriangleRight } from 'react-icons/vsc';



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
              <div className='menu-bar'>
                <h2 className='title-menu'>Menu</h2>
                <ul className='list-general-menu-test'>
                  <li className='list-item-menu'>
                  <div className='icon-menu'><VscTriangleRight /></div>
                    <a href='/' className='link-item-menu'>
                      Check-in</a>
                  </li>
                  <div className='line-menu'></div>
                  <li  className='list-item-menu'>
                  <div className='icon-menu'><VscTriangleRight style={{ color: "red" }}/></div>
                    <a href='/' className='link-item-menu'>
                    Manage My Booking</a>
                  </li>
                  <div className='line-menu'></div>
                  <li  className='list-item-menu'>
                  <div className='icon-menu'><VscTriangleRight color='#257ea2'/></div>
                    <a href='/' className='link-item-menu'>
                    Search</a>
                  </li>
                  <div className='line-menu'></div>
                  <li  className='list-item-menu'>
                  <div className='icon-menu'><VscTriangleRight /></div>
                    <a href='/' className='link-item-menu'>
                    Destinations</a>
                    
                  </li>
                  <div className='line-menu'></div>
                  <li  className='list-item-menu'>
                  <div className='icon-menu'><VscTriangleRight /></div>
                    <a href='/' className='link-item-menu'>
                    Members</a>
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