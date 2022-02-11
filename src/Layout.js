import { Outlet, Link } from 'react-router-dom';

import './Layout.css';


export const Layout = () => {

    return (

        <div className="container">
            {/* <header className='app-header'> */}
                <div className='row header-color h-100'>
                    <div className='col-md-6'>
                        <h1>Off the Hooks Voting App</h1>
                    </div>
                    <div className="col-md-4"><h3 className='slogan'>So passeth a worthy opponent</h3> </div>
                    <div className='col-md-1'>

                    </div>
                    <div className='col-md-1'>
                        
                    </div>
                </div>

            <div className="row header-color h-100">
                <div className="col-md-6"><h1></h1></div>
                <div className="col-md-2"></div>
                <div className="col-md-3"></div>
                <div className="col-md-1">
                    <img alt="logo" src="logo.png"/>
                </div>
            </div>
                
            {/* </header> */}

            <nav id="main-menu" className="navbar navbar-expand-lg navbar-light" >
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
                <small>&copy; 2022 Off the Hook Company, Inc.</small>
            </footer>
        </div>

    );

}