import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "unistore/react";
import {actions, store} from "../store";
import axios from "axios";
import {Container, Row, Col} from 'react-bootstrap';
import NewsBody from "../components/newsBody";
import NavigationBar from "../components/navbar";
import ShowSideBarBody from "../components/showSideBar";

const apiKey = "06efa54746344387aaed942eac41da02";
const baseUrl = "https://newsapi.org/v2/";

class Home extends React.Component {
    requestNews = async () => {
        store.setState({loadingKah: true});
        let kategori = this.props.match.params.kategori;
        if (kategori === undefined) {kategori="general"}
        axios.get(baseUrl + `top-headlines?country=id&category=${kategori}&q=${this.props.keyword}&apiKey=` + apiKey)
            .then((response) => {
                store.setState({
                    listNews: response.data.articles,
                    loadingKah: false
                })
            })
            .catch((error) => {
                store.setState({loadingKah: true})
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

    handleRouterSearch = keywordObject => {
        store.setState({ [keywordObject.target.name]: keywordObject.target.value });
        this.requestNews();
    };

    render() {
        const validHeadlines = this.props.listNews.filter((item) => {
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
                <NavigationBar {...this.props} handleRouter={event => this.handleRouterKategori(event)}
                    handleSearch={event => this.handleRouterSearch(event)}/>
                <Container fluid={true}>
                    <Container className="mt-5">
                        <Row>
                            <Col md="4" className="ml-auto"><ShowSideBarBody /></Col>
                            <Col md="7" className="mr-auto">
                                {this.props.loadingKah ? <div className="h5 font-weight-bold">Loading...</div> : headlineNews}
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        );
    }
}


// export default Home;
export default connect("keyword, listNews, loadingKah", actions)(withRouter(Home));