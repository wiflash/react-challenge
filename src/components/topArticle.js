import React from 'react';
import {ListGroup, Row, Col, Badge} from 'react-bootstrap';

class TopArticle extends React.Component {
    functionAlert=() =>{
        alert("halooo")
    }
    render() {
        const judulTopArticle = [
            "Gabung Alpha Tech Academy Sekarang!",
            "Ada apa antara Kobar dan Hasan?",
            "Mengenal Arafat sang Master Python",
            "Belajar ReactJs itu seru. Kamu setuju?",
            "Sudahkah kamu sehat mendal?"
        ];
        const topArticleList = judulTopArticle.map((judulTopArticle, index)=>{
            return (
                <ListGroup.Item>
                    <Badge pill variant="danger">#{index+1}</Badge><br/>
                    <a href="#">{judulTopArticle}</a>
                </ListGroup.Item>
            );
        });

        return (
            <ListGroup>
                <ListGroup.Item>
                    <Row className="align-items-center">
                        <Col md="6">
                            <span className="text-primary font-weight-bold">BERITA TERKINI</span>
                        </Col>
                        <Col className="text-right">
                            <a href="#">lihat semua</a>
                        </Col>
                    </Row>
                </ListGroup.Item>
                {topArticleList}
            </ListGroup>
        );
    }
}


export default TopArticle;