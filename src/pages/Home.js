import React from "react";
import Navbar from "../components/navbar";
import TopArticle from "../components/topArticle";
import ArticleList from "../components/articleList";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-4"><TopArticle /></div>
                            <div className="col-md-8"><ArticleList /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;