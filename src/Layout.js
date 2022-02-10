import { Outlet, Link } from 'react-router-dom';

import './Layout.css';


export const Layout = () => {

    return (

        <div className="container">
            <header>
                <h1>Democracy Apps</h1>
            </header>

            <nav id="main-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/voting-tool">Voting Tool</Link></li>
                    <li><Link to="/registration-tool">Registration Tool</Link></li>
                    <li><Link to="/election-tool">Election Tool</Link></li>
                </ul>
            </nav>

            <main id="content">
                <Outlet />
            </main>

            <aside id="sidebar">
                sidebar
            </aside>


            <footer id="page-footer">
                <small>&copy; 2022 KechCo Company, Inc.</small>
            </footer>
        </div>

    );

}