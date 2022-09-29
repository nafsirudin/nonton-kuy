import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import API from '../services';
import SkeletonSingleCard from './Loading/SkeletonSingleCard';

const BannerSlideSingle = () => {
    const [moviesUpcoming, setMoviesUpcoming] = useState(null);
    useEffect(() => {
        API.getMovie('upcoming').then(response => {
            setMoviesUpcoming(response.results);
        })
    }, []);
    
    return(
        <section className="pt-0 pb-0">
            <div className="container-fluid px-0">
                <div className="row no-gutters">
                    <div className="col-12">
                        { moviesUpcoming && 
                            <div className="gen-banner-movies">
                                <Swiper
                                    autoplay={{
                                        delay: 4500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.slideNext-btn',
                                        prevEl: '.slidePrev-btn',
                                    }}
                                    modules={[Autoplay, Navigation]}
                                >
                                    {
                                        moviesUpcoming.slice(0,6).map((movie, index) => {
                                            return(
                                                <SwiperSlide key={index}>
                                                    <div className="item" style={{background: `url('${process.env.REACT_APP_TMDB_IMG_URL+'/w1280/'+movie.backdrop_path}')`}}>
                                                        <div className="gen-movie-contain h-100">
                                                            <div className="container h-100">
                                                                <div className="row align-items-center h-100">
                                                                    <div className="col-xl-6">
                                                                        <div className="gen-tag-line"><span></span></div>
                                                                        <div className="gen-movie-info">
                                                                            <h3>{movie.title}</h3>
                                                                        </div>
                                                                        <div className="gen-movie-meta-holder">
                                                                            <ul>
                                                                                <li className="gen-sen-rating">
                                                                                    <span>
                                                                                        R </span>
                                                                                </li>
                                                                                <li>
                                                                                    1hr
                                                                                </li>
                                                                                <li> <img src="assets/images/asset-2.png" alt="streamlab-image" />
                                                                                    <span>
                                                                                        0 </span>
                                                                                </li>
                                                                                <li>
                                                                                    { new Date(movie.release_date).getFullYear()}
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#"><span>Upcoming</span></a>
                                                                                </li>
                                                                            </ul>
                                                                            <p>{movie.overview}</p>
                                                                        </div>
                                                                        <div className="gen-movie-action">
                                                                            <div className="gen-btn-container button-1">
                                                                                <a href="#" className="gen-button">
                                                                                    <span className="text">Play Now</span>
                                                                                </a>
                                                                            </div>
                                                                            <div className="gen-btn-container button-2">
                                                                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                                                                    className="gen-button popup-youtube popup-vimeo popup-gmaps gen-button-link">
                                                                                    <i aria-hidden="true" className="ion ion-play"></i> <span
                                                                                        className="text">Watch Trailer</span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                                <div className="slide-arrow slide-arrow__prev slidePrev-btn"><i className="fa-solid fa-angle-left"></i></div>
                                <div className="slide-arrow slide-arrow__next slideNext-btn"><i className="fa-solid fa-angle-right"></i></div>
                            </div>
                        }
                        { !moviesUpcoming &&
                            <SkeletonSingleCard />
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerSlideSingle;