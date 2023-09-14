import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import Cookies from 'js-cookie';

export default function Logout() {
    const [, setUser] = useAtom(userAtom);

    const handleLogout = () => {
        setUser({
            id: '',
            isLoggedIn: false,
            token: '',
        });

        Cookies.remove('token');
        Cookies.remove('id');
    };

    return (
        <button onClick={handleLogout}>Déconnexion</button>
    );
}