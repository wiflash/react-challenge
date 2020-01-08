import React from "react";
import axios from "axios";
import {Container, Row, Form, Button} from 'react-bootstrap';
import NavigationBar from "../components/navbar";

const url = "https://login-uhuy.free.beeceptor.com/login";

class Masuk extends React.Component {
    state = {username: "", password: ""};

    updateData = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    login = () => {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        console.log("data", data)
        axios.post(url, data)
        .then((response) => {
            console.log("response mock:",response.data)
            console.log("ada apiKey:",response.data.hasOwnProperty("apiKey"))
            if (response.data.hasOwnProperty("apiKey")) {
                    localStorage.setItem("apiKey", response.data.apiKey);
                    localStorage.setItem("email", response.data.email);
                    localStorage.setItem("fullname", response.data.fullname);
                    localStorage.setItem("loginKah", true);
                    this.props.history.push("/profil");
                }
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar {...this.props} />
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <Form className="mx-auto" onSubmit={event => event.preventDefault()}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Masukan username"
                                        name="username" onChange={event => this.updateData(event)}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Masukan password"
                                        name="password" onChange={event => this.updateData(event)}/>
                                </Form.Group>
                                <Button variant="outline-info" type="submit" onClick={() => this.login()}>
                                    Masuk
                                </Button>
                            </Form>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        )
    }
}


export default Masuk;