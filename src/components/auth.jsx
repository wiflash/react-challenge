import React from 'react';
import {Nav} from 'react-bootstrap';


class Auth extends React.Component {
    render() {
        const auth = ["Masuk", "Daftar"];
        const authMenu = auth.map(auth => {
            return <Nav.Link href={auth}>{auth}</Nav.Link>;
        });

        return (
            <Nav className="mr-auto ml-auto">
                {authMenu}
            </Nav>
        );
    }
}


export default Auth;