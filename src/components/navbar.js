import React from 'react';
import logo from '../logo.svg';

class Navbar extends React.Component {
    render() {
        const kategori = ["Sepak Bola", "Ekonomi", "Politik", "Hiburan"];
        const lainnya = ["Game", "Bisnis", "Kehutanan"];
        const auth = ["Masuk", "Daftar"];
        const kategoriMenu = kategori.map(kategori=>{
            return (
                <li class="nav-item">
                    <a class="nav-link" href="#">{kategori}</a>
                </li>
            );
        });
        const lainnyaDropdown = lainnya.map(lainnya=>{
            return <a class="dropdown-item" href="#">{lainnya}</a>;
        });
        const authMenu = auth.map(auth=>{
            return (
                <li class="nav-item">
                    <a class="nav-link" href="#">{auth}</a>
                </li>
            );
        });

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-nav mr-auto">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="50" height="50" className="d-inline-block align-center" alt="logo"/>
                        <span>KabarKabar</span>
                    </a>
                </div>
                <ul class="navbar-nav mr-auto ml-auto">
                    {kategoriMenu}
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Lainnya
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">{lainnyaDropdown}</div>
                    </li>
                </ul>
                <form class="form-inline mr-auto ml-auto">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                {/* </div> */}
                <div className="navbar-nav mr-auto ml-auto">
                    {authMenu}
                </div>
            </nav>
        );
    }
}


export default Navbar;