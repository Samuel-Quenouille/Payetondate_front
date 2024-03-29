import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { isAdminAtom } from '../atom'
import { Link } from 'react-router-dom';
import Logout from "../components/Logout";



export default function Navbar() {
    const [user] = useAtom(userAtom);
    const [isAdmin] = useAtom(isAdminAtom)

    return (
        <nav className="navbar navbar-expand p-2">
            <ul className="navbar-nav d-flex align-items-center justify-content-between w-100">
                <li className="nav-item d-flex">
                    <Link className="nav-link" to="/">
                        Accueil
                    </Link>
                    <Link className="nav-link" to="/articles">
                        Articles
                    </Link>
                </li>
                <li className="nav-item d-flex">
                    {user.isLoggedIn ? (
                        <>
                            <Link className="nav-link" to="/createplace">
                                Créer un lieu
                            </Link>
                            {isAdmin &&
                                <Link className="nav-link" to="/admin">
                                    Tableau de bord
                                </Link>
                                }
                            <Logout />
                        </>
                    ) : (
                        <>
                            <Link className="whitebtn" to="/login">
                                Connexion
                            </Link>
                        </>
                    )}
                </li>
            </ul>
        </nav>
    )
    
}