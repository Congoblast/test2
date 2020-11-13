import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => (
<nav bg="dark" variant="dark">
    <ul>
        <li>
            <Link className="navitem" to="/questions">All questions</Link>
            <Link className="navitem" to="/question">Ask Question</Link>
        </li>
    </ul>
</nav>



);
    export default NavBar;