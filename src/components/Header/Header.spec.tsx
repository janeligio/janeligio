import { Link } from 'react-router-dom';
import './Header.spec.sass';

export default function Header() {
    return (
        <header id="header">
            <address className="header-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <a
                    className="header-link"
                    href="https://github.com/janeligio/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a className="header-link" href="mailto:inquire@janeligio.com">
                    Email
                </a>
            </address>
        </header>
    );
}
