import React from "react";
import axios from "axios";
import {withRouter, Link} from "react-router-dom";
import {connect} from "unistore/react";
import {actions, store} from "../store";
import {ListGroup, Row, Col} from 'react-bootstrap';
import SideBarBody from "./sideBarBody";


const apiKey = "06efa54746344387aaed942eac41da02";
const baseUrl = "https://newsapi.org/v2/";

class ShowSideBarBody extends React.Component {
    componentDidMount = () => {
        store.setState({sideLoadingKah: true});
        axios.get(baseUrl + `top-headlines?country=id&category=general&apiKey=` + apiKey + "&page=1&pageSize=5")
            .then((response) => {
                store.setState({
                    sideListNews: response.data.articles,
                    sideLoadingKah: false
                })
            })
            .catch((error) => {
                store.setState({sideLoadingKah: true})
            });
    };

    render() {
        const validHeadlines = this.props.sideListNews.filter((item) => {
            if (item.content !== null && item.image !== null) {
                return item;
            }
            return false;
        });
        
        const headlineNews = validHeadlines.map((item, key) => {
            return (
                <SideBarBody
                rank={key+1}
                title={item.title}
                url={item.url}
                />
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
                            <Link to="/">lihat semua</Link>
                        </Col>
                    </Row>
                </ListGroup.Item>
                {this.props.sideLoadingKah ? <ListGroup.Item>Loading...</ListGroup.Item> : headlineNews}
            </ListGroup>
        );
    }
}


export default connect("keyword, sideListNews, sideLoadingKah", actions)(withRouter(ShowSideBarBody));