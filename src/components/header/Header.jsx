import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './Header.css'
const Header = () => {
    return (
        <nav className="border flex  items-center gap-5 flex-col md:flex-row md:justify-between">
            <div>
                <img className="h-[50px] w-[150px] md:h-[70px] md:w-[250px] object-contain" src={logo} alt="" />
            </div>
            <div>
                <ul className="flex items-center gap-10">
                    <li>
                        <NavLink to="/" className="text-lg">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation" className="text-lg">Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics" className="text-lg">Statistics</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;