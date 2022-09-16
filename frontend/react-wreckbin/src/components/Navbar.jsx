import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Bootstrap
        </Link>
      </div>
    </nav>    
  );
}

export default Navbar;