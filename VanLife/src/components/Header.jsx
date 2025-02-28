import {Link} from "react-router"
export default function Header() {
    return (
      <header>
        <nav>
          <div className="logo"><Link to="/">#VANLIFE</Link></div>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/vans">Vans</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  