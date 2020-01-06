import React from 'react';

class TopArticle extends React.Component {
    render() {
        const judulTopArticle = [
            "Gabung Alpha Tech Academy Sekarang!",
            "Ada apa antara Kobar dan Hasan?",
            "Mengenal Arafat sang Master Python",
            "Belajar ReactJs itu seru. Kamu setuju?",
            "Sudahkah kamu sehat mendal?"
        ];
        const topArticleList = judulTopArticle.map((judulTopArticle, index)=>{
            return (
                <li class="list-group-item">
                    <span className="badge badge-pill badge-danger">#{index+1}</span><br/>
                    <span className="text-primary font-weight-normal">{judulTopArticle}</span>
                </li>
                // <div className="row align-items-center border-top">
                //     <div className="col-md-12">
                //         <span className="badge badge-pill badge-danger">#{index+1}</span><br/>
                //         <span className="text-primary font-weight-normal">{judulTopArticle}</span>
                //     </div>
                // </div>
            );
        });

        return (
            <ul class="list-group">
                <li class="list-group-item">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <span className="text-primary font-weight-bold">BERITA TERKINI</span>
                        </div>
                        <div className="col-md-6 text-right">
                            <a href="#">lihat semua</a>
                        </div>
                    </div>
                </li>
                {topArticleList}
            </ul>
        );
    }
}


export default TopArticle;