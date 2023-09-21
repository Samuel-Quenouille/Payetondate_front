import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { NavLink } from 'react-router-dom'; // Utilisez NavLink au lieu de Link
import Logout from "../components/Logout";

export default function Navbar() {
    const [user] = useAtom(userAtom);

    return (
        <nav className="navbar navbar-expand p-2">
            <ul className="navbar-nav d-flex align-items-center justify-content-between w-100">
                <li className="nav-item d-flex">
                    <NavLink exact activeClassName="active" className="nav-link" to="/"> {/* Utilisez NavLink */}
                        Accueil
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-link" to="/articles"> {/* Utilisez NavLink */}
                        Articles
                    </NavLink>
                </li>
                <li className="nav-item d-flex">
                    {user.isLoggedIn ? (
                        <>
                            <NavLink activeClassName="active" className="nav-link" to="/createplace"> {/* Utilisez NavLink */}
                                Créer un lieu
                            </NavLink>
                            <NavLink activeClassName="active" className="nav-link" to="/admin"> {/* Utilisez NavLink */}
                                Tableau de bord
                            </NavLink>
                            <Logout />
                        </>
                    ) : (
                        <>
                            <NavLink activeClassName="active" className="whitebtn" to="/login"> {/* Utilisez NavLink */}
                                Connexion
                            </NavLink>
                        </>
                    )}
                </li>
            </ul>
        </nav>
    )
}
