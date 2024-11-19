import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <h1>React demo app</h1>
            <nav>
                <ul>
                    <li><NavLink to='/'> List</NavLink></li>
                    <li><NavLink to='about'> About</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};