import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css'
import { Link } from 'react-router';
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top pb-3">
      <div className="container">
        <Link to="/" className="navbar-brand" title='Home'>E - commerce</Link>
        <button className="navbar-toggler"
          type='button' 
          data-bs-toggle="collapse" 
          data-bs-target='#navMenu'
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id='navMenu'>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/orders" className="nav-link">Orders</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header;