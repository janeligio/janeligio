import {AiFillMail, AiFillGithub} from 'react-icons/ai';
import './Header.css';
export default function Header() {
    return (
        <header className="Header">
            <h1>Jan Iverson Eligio</h1>
            <address className="header-links">
                <a className="header-link" href="https://github.com/janeligio/" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="gh-icon" size="2rem"/>
                </a>
                <a className="header-link" href="mailto:jeligio808@gmail.com">
                    <AiFillMail  className="mail-icon" size="2rem"/>
                </a>
                    {/* <AiFillGithub className="gh-icon" size="2rem"/>
                    <AiFillMail  className="mail-icon" size="2rem"/> */}
            </address>
        </header>);

}