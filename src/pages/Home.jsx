import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import NavigationBar from "../components/navbar";
import ShowSideBarBody from "../components/showSideBar"
import ShowNewsBody from "../components/showNews";

class Home extends React.Component {
    handleRouterKategori = async namaKategori => {
        let kategori;
        namaKategori === "Olahraga" ? kategori="sports"
            : namaKategori === "Hiburan" ? kategori="entertainment"
            : namaKategori === "Bisnis" ? kategori="business"
            : namaKategori === "Sains" ? kategori="science"
            : namaKategori === "Teknologi" ? kategori="technology"
            : kategori="health"
        await this.props.history.replace("/" + kategori);
        // this.requestNews();
    };

    render() {
        return (
            <div>
                <NavigationBar handleRouter={e => this.handleRouterKategori(e)}/>
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <Col md="4" className="ml-auto"><ShowSideBarBody /></Col>
                            <Col md="7" className="mr-auto"><ShowNewsBody category="general"/></Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Home;