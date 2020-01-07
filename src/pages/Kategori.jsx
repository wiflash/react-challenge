import React from "react";
import axios from "axios";
import {Container, Row, Col} from 'react-bootstrap';
import NewsBody from "../components/newsBody";
import NavigationBar from "../components/navbar";
import ShowSideBarBody from "../components/showSideBar";

const apiKey = "06efa54746344387aaed942eac41da02";
const baseUrl = "https://newsapi.org/v2/";

class Category extends React.Component {
    state = {
        listNews: [],
        isLoading: true
    };

    requestNews = async () => {
        const kategori = await this.props.match.params.kategori;
        await axios.get(baseUrl + `top-headlines?country=id&category=${kategori}&apiKey=` + apiKey)
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
    }

    componentDidMount = () => {
        this.requestNews();
    };

    handleRouterKategori = async namaKategori => {
        let kategori;
        namaKategori === "Olahraga" ? kategori="sports"
            : namaKategori === "Hiburan" ? kategori="entertainment"
            : namaKategori === "Bisnis" ? kategori="business"
            : namaKategori === "Sains" ? kategori="science"
            : namaKategori === "Teknologi" ? kategori="technology"
            : kategori="health"
        await this.props.history.replace("/" + kategori);
        this.requestNews();
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
                <NewsBody
                    key={key}
                    title={item.title}
                    img={item.urlToImage}
                    content={item.description}
                    url={item.url}
                />
            );
        });
        return (
            <div>
                <NavigationBar handleRouter={e => this.handleRouterKategori(e)}/>
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <Col md="4" className="ml-auto"><ShowSideBarBody /></Col>
                            <Col md="7" className="mr-auto">
                                {this.state.isLoading ? <div className="h5 font-weight-bold">Loading...</div> : headlineNews}
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Category;