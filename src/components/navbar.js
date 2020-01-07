import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../logo.svg';

class NavigationBar extends React.Component {
    render() {
        const kategori = ["Sepak Bola", "Ekonomi", "Politik", "Hiburan"];
        const lainnya = ["Game", "Bisnis", "Kehutanan"];
        const auth = ["Masuk", "Daftar"];
        const kategoriMenu = kategori.map(kategori=>{
            return (
                <Nav.Link href="#">{kategori}</Nav.Link>
            );
        });
        const lainnyaDropdown = lainnya.map(lainnya=>{
            return <NavDropdown.Item href="#">{lainnya}</NavDropdown.Item>;
        });
        const authMenu = auth.map(auth=>{
            return (
                <Nav.Link href="#">{auth}</Nav.Link>
            );
        });

        return (
            <Navbar expand="lg" bg="light">
                <Nav className="mr-auto">
                    <Navbar.Brand href="#">
                        <img src={logo} width="50" height="50" className="d-inline-block align-center" alt="logo"/>
                        <span>KabarKabar</span>
                    </Navbar.Brand>
                </Nav>
                <Nav className="mr-auto ml-auto">
                    {kategoriMenu}
                    <NavDropdown title="Lainnya">
                        {lainnyaDropdown}
                    </NavDropdown>
                </Nav>
                <Form inline className="mr-auto ml-auto">
                    <FormControl className="mr-sm-2" type="search" placeholder="Search"/>
                    <Button variant="outline-success" className="my-2 my-sm-0" type="submit">Search</Button>
                </Form>
                <Nav className="mr-auto ml-auto">
                    {authMenu}
                </Nav>
            </Navbar>
        );
    }
}


export default NavigationBar;