import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { Link } from 'react-router-dom';
import Logout from "../components/Logout";


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
                    <Link className="nav-link" to="/admin">
                        Tableau de bord
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