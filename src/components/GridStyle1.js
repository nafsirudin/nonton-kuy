import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services";

const GridStyle1 = (props) => {
    const navigate = useNavigate();
    const [movieDetails, setmovieDetails] = useState([]);
    useEffect(() => {        
        API.getMovie(props.movieId).then(response => {
            setmovieDetails(response);
        })
    }, [])

    return(
        <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
            <div className="gen-carousel-movies-style-3 movie-grid style-3">
                <div className="gen-movie-contain">
                    <div className="gen-movie-img">
                        <img src={props.image}
                            alt="owl-carousel-video-image" />
                        <div className="gen-movie-add">
                            <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_className wp_ulike_is_not_liked">
                                    <button type="button"
                                        className="wp_ulike_btn wp_ulike_put_image"></button>
                                </div>
                            </div>
                            <ul className="menu bottomRight">
                                <li className="share top">
                                    <i className="fa fa-share-alt"></i>
                                    <ul className="submenu">
                                        <li><a href="#" className="facebook"><i
                                                    className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li><a href="#" className="facebook"><i
                                                    className="fab fa-instagram"></i></a>
                                        </li>
                                        <li><a href="#" className="facebook"><i
                                                    className="fab fa-twitter"></i></a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="movie-actions--link_add-to-playlist dropdown">
                                <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                        className="fa fa-plus"></i></a>
                                <div className="dropdown-menu mCustomScrollbar">
                                    <div className="mCustomScrollBox">
                                        <div className="mCSB_container">
                                            <a className="login-link" href="register.html">Sign in
                                                to add this
                                                movie to a
                                                playlist.</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gen-movie-action">
                            <a href="single-movie.html" className="gen-button">
                                <i className="fa fa-play"></i>
                            </a>
                        </div>
                    </div>
                    <div className="gen-info-contain">
                        <div className="gen-movie-info">
                            <h3>
                                <a href="" onClick={(e) => { e.preventDefault(); navigate(`/movies/detail/${props.movieId}`) }}>{props.title}</a>
                            </h3>
                        </div>
                        <div className="gen-movie-meta-holder">
                            <ul>
                                <li>{movieDetails ? Math.floor(movieDetails.runtime /60)+"hr"+" "+movieDetails.runtime%60+"mins" : ''}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridStyle1;