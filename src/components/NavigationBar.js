import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    return(
        <header id="gen-header" className="gen-header-style-1 gen-has-sticky">
            <div className="gen-bottom-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="#">
                                    <img className="img-fluid logo" src="/assets/images/logo-1.png" alt="streamlab-image" />
                                </a>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div id="gen-menu-contain" className="gen-menu-contain">
                                        <ul id="gen-main-menu" className="navbar-nav ml-auto">
                                            <li className="menu-item">
                                                <NavLink to="/">Home</NavLink>
                                            </li>
                                            <li className="menu-item">
                                                <NavLink to="/movies">Movies</NavLink>
                                            </li>
                                            <li className="menu-item">
                                                <a href="#" >Category</a>
                                                <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                                <ul className="sub-menu">
                                                    <li className="menu-item">
                                                        <a href="/movies" onClick={(e)=> e.preventDefault()} aria-current="page">Movies</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="gen-header-info-box">
                                    <div className="gen-menu-search-block">
                                        <a href="#" id="gen-seacrh-btn"><i className="fa fa-search"></i></a>
                                        <div className="gen-search-form">
                                            <label>
                                                <span className="screen-reader-text"></span>
                                                <input type="search" className="search-field" placeholder="Search …"
                                                    name="s" />
                                            </label>
                                            <button type="submit" className="search-submit"><span
                                                    className="screen-reader-text"></span></button>
                                        </div>
                                    </div>
                                    <div className="gen-account-holder">
                                        <a href="#" id="gen-user-btn"><i className="fa fa-user"></i></a>
                                        <div className="gen-account-menu">
                                            <ul className="gen-account-menu">
                                                <li>
                                                    <a href="log-in.html"><i className="fas fa-sign-in-alt"></i>
                                                        login </a>
                                                </li>
                                                <li>
                                                    <a href="register.html"><i className="fa fa-user"></i>
                                                        Register </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="gen-btn-container">
                                        <a href="register.html" className="gen-button">
                                            <div className="gen-button-block">
                                                <span className="gen-button-line-left"></span>
                                                <span className="gen-button-text">Subscribe</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fas fa-bars"></i>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavigationBar;