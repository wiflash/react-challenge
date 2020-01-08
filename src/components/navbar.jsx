import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, InputGroup, Button} from 'react-bootstrap';
import {FiSearch} from "react-icons/fi";
import logo from '../logo.svg';

class NavigationBar extends React.Component {
    removeLocalLogin = () => {
        localStorage.removeItem("loginKah");
        this.props.history.push("/");
        console.log("MASUK")
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
                    <Nav className="mr-auto ml-auto">
                        {kategoriMenu}
                        <NavDropdown title="Lainnya">
                            {lainnyaDropdown}
                        </NavDropdown>
                    </Nav>
                    <Form inline className="mr-auto ml-auto">
                        <InputGroup>
                            <FormControl type="search" placeholder="Search" onChange={keyword => this.props.handleSearch(keyword)}/>
                            <InputGroup.Append>
                                <Button variant="outline-info" className="my-2 my-sm-0" type="submit"><FiSearch/></Button>
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