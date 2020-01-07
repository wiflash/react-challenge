import React from 'react';
import {ListGroup, Row, Col, Badge} from 'react-bootstrap';

class SideBar extends React.Component {
    functionAlert=() =>{
        alert("halooo")
    }
    render() {
        const judulNews = [
            "Gabung Alpha Tech Academy Sekarang!",
            "Ada apa antara Kobar dan Hasan?",
            "Mengenal Arafat sang Master Python",
            "Belajar ReactJs itu seru. Kamu setuju?",
            "Sudahkah kamu sehat mendal?"
        ];
        const topNewsBadges = judulNews.map((judulNews, index)=>{
            return (
                <ListGroup.Item>
                    <Badge pill variant="danger">#{index+1}</Badge><br/>
                    <a href="#">{judulNews}</a>
                </ListGroup.Item>
            );
        });

        return (
            <ListGroup className="mb-4">
                <ListGroup.Item>
                    <Row className="align-items-center">
                        <Col md="6">
                            <span className="text-primary font-weight-bold">BERITA TERKINI</span>
                        </Col>
                        <Col md="6" className="text-right">
                            <a href="#">lihat semua</a>
                        </Col>
                    </Row>
                </ListGroup.Item>
                {topNewsBadges}
            </ListGroup>
        );
    }
}


export default SideBar;