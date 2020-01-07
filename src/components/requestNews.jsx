import React, {Component} from "react";
import axios from "axios";
import NewsBody from "./newsBody";

const apiKey = "06efa54746344387aaed942eac41da02";
const baseUrl = "https://newsapi.org/v2/";

class RequestNewsBody extends Component {
    state = {
        listNews: [],
        category: "general",
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
            <div className="headlineNews">
                {this.state.isLoading ? <div className="h5 font-weight-bold">Loading...</div> : headlineNews}
            </div>
        );
    }
}


export default RequestNewsBody;