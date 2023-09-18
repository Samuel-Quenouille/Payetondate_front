import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { Link } from 'react-router-dom';
import Logout from "../components/Logout";


export default function Navbar() {
    const [user] = useAtom(userAtom);

    return (
        <nav className="navbar navbar-expand p-2">
            <ul className="navbar-nav d-flex align-items-center justify-content-between w-100">
                <li className="nav-item d-flex">
                    <Link className="nav-link" to="/">
                        Accueil
                    </Link>
                    <Link className="nav-link" to="#">
                        Articles
                    </Link>
                </li>
                <li className='flex-1'>
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
                    {/* <Link className="nav-link" to="/register">
                        Inscription
                    </Link> */}
                    <div className=''>
                    <Link className="whitebtn" to="/login">
                        Connexion
                    </Link>
                    </div>
                    </>
                )}
              </li>
            </ul>
        </nav>
    )
}
