import React from 'react';
import {Navbar, Nav, NavDropdown, FormControl} from 'react-bootstrap';
import logo from '../logo.svg';

class NavigationBar extends React.Component {
    removeLocalLogin = () => {
        localStorage.removeItem("loginKah");
        this.props.history.push("/");
        console.log("CLICKED KELUAR")
    };

    render() {
        const auth = ["Profil" ,"Masuk", "Keluar"];
        const authMenu = auth.map(auth => {
            if (auth === "Keluar") {
                return <Nav.Link onClick={this.removeLocalLogin}>{auth}</Nav.Link>;
            }
            return <Nav.Link href={auth}>{auth}</Nav.Link>;
        });

        const kategori = ["Olahraga", "Hiburan", "Bisnis"];
        const kategoriMenu = kategori.map(kategori => {
            return (
                <Nav.Link onClick={() => this.props.handleRouter(kategori)}>
                    {kategori}
                </Nav.Link>
            );
        });
        
        const lainnya = ["Sains", "Teknologi", "Kesehatan"];
        const lainnyaDropdown = lainnya.map((kategoriLainnya) => {
            return (
                <NavDropdown.Item onClick={() => this.props.handleRouter(kategoriLainnya)}>
                    {kategoriLainnya}
                </NavDropdown.Item>
            );
        });
        
        return (
            <Navbar expand="lg" bg="light">
                <Nav className="mr-auto">
                    <Navbar.Brand href="/">
                        <img src={logo} width="50" height="50" className="d-inline-block align-center" alt="logo"/>
                        <span>KabarKabar</span>
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        {kategoriMenu}
                        <NavDropdown title="Lainnya">
                            {lainnyaDropdown}
                        </NavDropdown>
                    </Nav>
                    <Nav className="mx-auto">
                        <FormControl name="keyword" type="search" placeholder="Ketik untuk mencari" onChange={keyword => this.props.handleSearch(keyword)}/>
                    </Nav>
                    <Nav className="mx-auto">
                        {authMenu}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default NavigationBar;