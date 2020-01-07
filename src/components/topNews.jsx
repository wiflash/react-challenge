import React, {Component} from "react";
import axios from "axios";
import News from "./renderNews";

const apiKey = "44687f6f58184f6385947cb55a41ac62";
const baseUrl = "https://newsapi.org/v2/";

class TopNews extends Component {
    state = {
        listNews: [],
        category: "sport",
        isLoading: true
    };
    componentDidMount = () => {
        axios.get(baseUrl + `top-headlines?country=id&category=${this.state.category}&apiKey=` + apiKey)
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
                <News
                    key={key}
                    title={item.title}
                    img={item.urlToImage}
                    content={item.description}
                    url={item.url}
                />
            );
        });
        return (
            <div className="headlineNews">
                {this.state.isLoading ? <div className="h5 font-weight-bold">Loading...</div> : headlineNews}
            </div>
        );
    }
}


export default TopNews;