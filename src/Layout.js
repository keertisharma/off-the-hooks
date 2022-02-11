import { Outlet, Link } from 'react-router-dom';

import './Layout.css';


export const Layout = () => {

    return (

        <div className="container">
            <header className='app-header'>
                <h1>Democracy Apps</h1>
            </header>

            <nav id="main-menu" className="navbar navbar-expand-lg navbar-light bg-light" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/voting-tool">Voting Tool</Link></li>
                    <li className="nav-item"><Link to="/registration-tool">Registration Tool</Link></li>
                    <li className="nav-item"><Link to="/election-tool">Election Tool</Link></li>
                </ul>
            </nav>

            <main id="content">
                <Outlet />
            </main>

            {/* <aside id="sidebar">
                sidebar
            </aside> */}


            <footer id="page-footer">
                <small>&copy; 2022 KechCo Company, Inc.</small>
            </footer>
        </div>

    );

}