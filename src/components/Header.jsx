import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning navbar-light">
      <div className="container">
        <a href="#" className="navbar-brand">Shop Project</a>
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
              <a href="#Orders" className="nav-link">Orders</a>
            </li>
            <li className="nav-item">
              <a href="#Cart" className="nav-link">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header;