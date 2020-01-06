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
                    <div className="row align-items-center text-center">
                        <div className="col-md-4">
                            <img src={love} className="img-fluid my-3" width="15%"/>
                        </div>
                        <div className="col-md-4">
                            <img src={share} className="img-fluid my-3" width="10%"/>
                        </div>
                        <div className="col-md-4">
                            <img src={dislike} className="img-fluid my-3" width="10%"/>
                        </div>
                    </div>
                </li>
            </ul>
            // <div className="container border rounded">
            //     <div className="row align-items-center">
            //         <div className="col-md-12">
            //             <img src={skyrim} className="img-fluid"/>
            //             <h4>Judul</h4>
            //             <p>Deskripsi</p>
            //             <div className="row align-items-center">
            //                 <div className="btn-group" role="group" aria-label="Basic example">
            //                     <button type="button" className="btn btn-secondary">Left</button>
            //                     <button type="button" className="btn btn-secondary">Middle</button>
            //                     <button type="button" className="btn btn-secondary">Right</button>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}


export default ArticleList;