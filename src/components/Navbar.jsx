import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [user] = useAtom(userAtom);

    return (
        <nav>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Accueil
                    </Link>
                </li>
                {user.isLoggedIn ? (
                    <>
                    <Link className="nav-link" to="/createplace">
                        Créer un lieu
                    </Link>
                    <Logout />
                    </>
                ) : (
                    <>
                    <Link className="nav-link" to="/register">
                        Inscription
                    </Link>
                    <Link className="nav-link" to="/login">
                        Connexion
                    </Link>
                    </>
                )}
            </ul>
        </nav>
    )
}