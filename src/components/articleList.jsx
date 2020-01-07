import React from 'react';
import {ListGroup, Image} from 'react-bootstrap';import skyrim from "../images/skyrim.jpg"
import love from "../images/love.png"
import share from "../images/share.png"
import dislike from "../images/dislike.png"

class ArticleList extends React.Component {
    render() {
        return (
            <ListGroup className="mb-4">
                <ListGroup.Item className="p-0">
                    <Image src={this.props.img} fluid/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className="h4 font-weight-bold">
                        <a href={this.props.url} className="text-body">
                            {this.props.title}
                        </a>
                    </p>
                    <p>{this.props.content}</p>
                    <p className="text-black-50 mb-1">Last updated 3 minutes ago</p>
                </ListGroup.Item>
                <ListGroup.Item className="p-0">
                    <ListGroup horizontal className="text-center">
                        <ListGroup.Item href="#" action variant="light" className="border-0">
                            <Image src={love} fluid width="15%"/>
                        </ListGroup.Item>
                        <ListGroup.Item href="#" action variant="light" className="border-0">
                            <Image src={share} fluid width="10%"/>
                        </ListGroup.Item>
                        <ListGroup.Item href="#" action variant="light" className="border-0">
                            <Image src={dislike} fluid width="10%"/>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        );
    }
}


export default ArticleList;