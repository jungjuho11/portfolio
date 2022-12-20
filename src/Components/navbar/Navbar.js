import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md mb-5">
            <div className="container-fluid">
                {/* <Link to="/" className='navbar-brand'>JJ Porfolio</Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className='nav-link active text-color' aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutme" className="nav-link text-color">About Me</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle text-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
                            <ul className="dropdown-menu animate__animated animate__fadeIn animate__faster">
                                <li><Link to="/calculator" className="dropdown-item">Calculator</Link></li>
                                <li><Link to="/quotecalc" className="dropdown-item">Quote Calculator</Link></li>
                                <li><Link to="/pingpong" className="dropdown-item">Ping Pong</Link></li>
                                <li><Link to="/shuffleboard" className="dropdown-item">Shuffleboard</Link></li>
                                <li><Link to="/todo" className="dropdown-item">Todo</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="/" className="dropdown-item">Action</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;