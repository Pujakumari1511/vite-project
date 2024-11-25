import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <h1>Vite-Project app</h1>
            <nav>
                <ul>
                    <li><NavLink to='list'> List</NavLink></li>
                    <li><NavLink to='about'> About</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};