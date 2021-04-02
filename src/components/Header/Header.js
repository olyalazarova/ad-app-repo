import '../Header/Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
return(
    <header className="site-header">
       
           <span className="blog-title"><Link className="blog-title" to="/">Architecture & Design Blog</Link></span>
           <nav className="navbar">
                <Link to="/architecture">Architecture</Link>
                <Link to="/design">Interior design</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="">Welcome, Pesho</Link>
                <Link to="/search">Search</Link>
           </nav>
      

    </header>
);

}

export default Header;