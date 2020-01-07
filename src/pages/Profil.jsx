import React from "react";
import { Redirect } from "react-router-dom";
import {Container, Form, Row, Col} from 'react-bootstrap';
import NavigationBar from "../components/navbar";


const Profil = props => {
    const email = localStorage.getItem("email");
    const fullname = localStorage.getItem("fullname");
    const loginKah = JSON.parse(localStorage.getItem("loginKah"));
    if (loginKah === null) {
        return <Redirect to={{ pathname: "/masuk" }} />;
    } else {
        return (
            <React.Fragment>
                <NavigationBar {...props} />
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <Form className="mx-auto">
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Email</Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue={email} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Full name</Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue={fullname} />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
};


export default Profil;