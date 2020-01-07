import React from 'react';
import {ListGroup, Image} from 'react-bootstrap';import skyrim from "../images/skyrim.jpg"
import love from "../images/love.png"
import share from "../images/share.png"
import dislike from "../images/dislike.png"

class ArticleList extends React.Component {
    render() {
        return (
            <ListGroup>
                <ListGroup.Item className="p-0">
                    <Image src={skyrim} fluid/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <p className="h3 font-weight-bold">Tamriel</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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