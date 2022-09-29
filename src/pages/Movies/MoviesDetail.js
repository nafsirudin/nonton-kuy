import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services";
const MoviesDetail = () => {
    const {movieId} = useParams();
    const [movieDetails, setmovieDetails] = useState([]);
    const [movieVideo, setmovieVideo] = useState([]);
    const [movieTrailer, setmovieTrailer] = useState([]);
    useEffect(()=> {
        window.scrollTo(0, 0);
        API.getMovie(movieId).then(response => {
            setmovieDetails(response);
            document.title = `${response.title} Movie - nontonKuy`;
        });

        API.getMovie(`${movieId}/videos`).then(response => {
            setmovieVideo(response);
            response.results?.map((resp) => {
                if(resp.name=="Official Trailer" || resp.name=='Teaser Trailer'){
                    let trailer = false;
                    if(resp.site==="YouTube"){
                        trailer = `https://www.youtube.com/embed/${resp.key}?autoplay=1&mute=0`;
                    }
                    setmovieTrailer(trailer);
                }
            })
        });
    }, []);
    console.log(movieVideo);
    return(
        <section className="gen-section-padding-3 gen-single-movie">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-12">
                        <div className="gen-single-movie-wrapper style-1">
                            <div className="row">
                            <div className="col-lg-12">
                                <div className="gen-video-holder">
                                    {
                                        movieTrailer!=false ?
                                        
                                            <iframe width="100%" height="550px" src={movieTrailer}></iframe>
                                        
                                        : <div style={{width:'100%', maxHeight:'550px', overflow:'hidden'}}><img width="100%" src={`${process.env.REACT_APP_TMDB_IMG_URL+'/original/'+movieDetails.backdrop_path}`} /></div>
                                    }
                                    
                                </div>
                                <div className="gen-single-movie-info">
                                    <h2 className="gen-title">{movieDetails.original_title}</h2>
                                    <div className="gen-single-meta-holder">
                                        <ul>
                                            <li className="gen-sen-rating">TV-PG {movieDetails.production_countries? '' : ''}</li>
                                            <li>
                                                <i className="fas fa-eye">
                                                </i>
                                                <span>237 Views</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <p>{movieDetails.overview}</p>
                                    <div className="gen-after-excerpt">
                                        <div className="gen-extra-data">
                                            <ul>
                                                <li>
                                                    <span>Language :</span>
                                                    <span>{movieDetails.original_language}</span>
                                                </li>
                                                <li>
                                                    <span>Audio Languages :</span>
                                                    {
                                                        movieDetails.spoken_languages?.map((lg, key) => {
                                                            return(
                                                                <span key={key}>{lg.name}</span>
                                                            );
                                                        })
                                                    }
                                                </li>
                                                <li><span>Genre :</span>
                                                    {
                                                        movieDetails.genres?.map((genre) =>{
                                                            return(
                                                                <span className="badge badge-danger text-light mr-2" key={genre.id}>
                                                                    <i onClick={(e)=> {return e.preventDefault()}}>
                                                                        {genre.name}
                                                                    </i>
                                                                </span>
                                                            );
                                                        })
                                                    }
                                                </li>
                                                <li><span>Run Time :</span>
                                                    <span>
                                                    {movieDetails ? Math.floor(movieDetails.runtime /60)+"hr"+" "+movieDetails.runtime%60+"mins" : ''}
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>Release Date :</span>
                                                    <span>
                                                        {moment(movieDetails.release_date).format('MMMM DD YYYY')}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="gen-socail-share">
                                            <h4 className="align-self-center">Social Share :</h4>
                                            <ul className="social-inner">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MoviesDetail;