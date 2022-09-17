import { Link } from 'react-router-dom'
import { getTokenFromLocalStorage } from '../services/bins';

const Navbar = () => {
  const userId = getTokenFromLocalStorage();

  return (
    <nav className="navbar navbar-expand-lg bg-primary text-white">
      <div className="container">
        <Link className="navbar-brand" to="/">WreckBin</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to={`/binpage/${userId}`}>All My Bins</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;