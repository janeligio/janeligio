import './Header.spec.sass';

export default function Header() {
    return (
        <header id="header">
            <address className="header-links">
                <a href="/about">About</a>
                <a
                    className="header-link"
                    href="https://github.com/janeligio/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a className="header-link" href="mailto:jeligio808@gmail.com">
                    Email
                </a>
            </address>
        </header>
    );
}
