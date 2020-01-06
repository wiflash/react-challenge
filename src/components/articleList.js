import React from 'react';
import skyrim from "../images/skyrim.jpg"
import love from "../images/love.png"
import share from "../images/share.png"
import dislike from "../images/dislike.png"

class ArticleList extends React.Component {
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item p-0">
                    <img src={skyrim} className="img-fluid"/>
                </li>
                <li className="list-group-item">
                    <p className="h3 font-weight-bold">Tamriel</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-black-50 mb-1">Last updated 3 minutes ago</p>
                </li>
                <li className="list-group-item p-0" style={{backgroundColor: "whitesmoke"}}>
                    <div class="list-group list-group-horizontal text-center">
                        <a href="#" class="list-group-item list-group-item-action list-group-item-secondary border-0">
                            <img src={love} className="img-fluid" width="15%"/>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-secondary border-0">
                            <img src={share} className="img-fluid" width="10%"/>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action list-group-item-secondary border-0">
                            <img src={dislike} className="img-fluid" width="10%"/>
                        </a>
                    </div>
                </li>
            </ul>
        );
    }
}


export default ArticleList;