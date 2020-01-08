import React from "react";
import {ListGroup, Row, Col} from 'react-bootstrap';
import axios from "axios";
import SideBarBody from "./sideBarBody";


const apiKey = "06efa54746344387aaed942eac41da02";
const baseUrl = "https://newsapi.org/v2/";

class ShowSideBarBody extends React.Component {
    state = {
        listNews: [],
        isLoading: true
    };

    componentDidMount = () => {
        axios.get(baseUrl + `top-headlines?country=id&category=general&apiKey=` + apiKey + "&page=1&pageSize=5")
            .then((response) => {
                this.setState({
                    listNews: response.data.articles,
                    isLoading: false
                })
            })
            .catch((error) => {
                this.setState({
                    isLoading: true
                })
            });
    };

    render() {
        const validHeadlines = this.state.listNews.filter((item) => {
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
        
        const isLoadingCheck = () => {
            if(this.state.isLoading === true) {
                return (
                <ListGroup.Item>
                    <p>Loading...</p>
                </ListGroup.Item>
                );
            } else {
                return headlineNews;
            }
        };
        
        return (
            <ListGroup className="mb-4">
                <ListGroup.Item>
                    <Row className="align-items-center">
                        <Col md="6">
                            <span className="text-primary font-weight-bold">BERITA TERKINI</span>
                        </Col>
                        <Col md="6" className="text-right">
                            <a href="/">lihat semua</a>
                        </Col>
                    </Row>
                </ListGroup.Item>
                {isLoadingCheck()}
            </ListGroup>
        );
    }
}


export default ShowSideBarBody;