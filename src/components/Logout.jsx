import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export default function Logout() {
    const [, setUser] = useAtom(userAtom);
    const navigate = useNavigate();


    const handleLogout = () => {
        setUser({
            id: '',
            isLoggedIn: false,
            token: '',
        });

        Cookies.remove('token');
        Cookies.remove('id');

        navigate('/')
    };

    return (
        <button className='disconnect-button' onClick={handleLogout}>Déconnexion</button>
    );
}