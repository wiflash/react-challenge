import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, InputGroup, Button} from 'react-bootstrap';
import {FiSearch} from "react-icons/fi";
import logo from '../logo.svg';

class NavigationBar extends React.Component {
    render() {
        const kategori = ["Umum", "Olahraga", "Hiburan", "Bisnis"];
        const lainnya = ["Sains", "Teknologi", "Kesehatan"];
        const auth = ["Masuk", "Daftar"];
        const kategoriMenu = kategori.map(kategori=>{
            return (
                <Nav.Link>{kategori}</Nav.Link>
            );
        });
        const lainnyaDropdown = lainnya.map((lainnya)=>{
            return <NavDropdown.Item>{lainnya}</NavDropdown.Item>;
        });
        const authMenu = auth.map(auth=>{
            return (
                <Nav.Link>{auth}</Nav.Link>
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
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className="mr-auto ml-auto">
                        {kategoriMenu}
                        <NavDropdown title="Lainnya">
                            {lainnyaDropdown}
                        </NavDropdown>
                    </Nav>
                    <Form inline className="mr-auto ml-auto">
                        <InputGroup>
                            <FormControl type="search" placeholder="Search"/>
                            <InputGroup.Append>
                                <Button variant="outline-success" className="my-2 my-sm-0" type="submit"><FiSearch/></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                    <Nav className="mr-auto ml-auto">
                        {authMenu}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default NavigationBar;