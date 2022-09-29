import React, {Component} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import "swiper/css/pagination";
import "swiper/css/navigation";
import GridStyle1 from "./GridStyle1";
import axios from "axios";
import API from "../services";
import SkeletonColCard from "./Loading/SkeletonColCard";

class MostPopuler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies_popular: null,
            names: ['Bruce', 'Clark', 'Diana']
        }
    };

    componentDidMount(){
        API.getMovie('popular').then(response => {
            this.setState({movies_popular: response.results});
        })        
    }
    render() {
        return (
            <section className="gen-section-padding-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <h4 className="gen-heading-title">Most Popular</h4>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
                            <div className="gen-movie-action">
                                <div className="gen-btn-container text-right">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="gen-style-2">
                                <Swiper
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 30
                                        },
                                        480: {
                                            slidesPerView: 2,
                                            spaceBetween: 30
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 30
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 30
                                        }
                                    }}
                                    modules={[Pagination, Navigation]}
                                    pagination={{
                                        clickable: true,
                                    }}
                                >
                                    { 
                                        this.state.movies_popular ? this.state.movies_popular?.slice(0,10).map((movie, index) => {
                                            return(
                                                <SwiperSlide key={index}>
                                                    <GridStyle1 movieId={movie.id} title={movie.title} image={`${process.env.REACT_APP_TMDB_IMG_URL}/w500/${movie.backdrop_path}`} genreIds={movie.genre_ids}/>
                                                </SwiperSlide>
                                            )
                                        })
                                    : <SkeletonColCard />
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



export default MostPopuler;