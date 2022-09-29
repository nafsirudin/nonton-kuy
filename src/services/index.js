import axios from "axios";

const base_url_tmdb = process.env.REACT_APP_TMDB_BASE_URL;
const api_key_tmdb = process.env.REACT_APP_TMDB_KEY;
const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${base_url_tmdb}/${path}`, {
            params: {
                api_key: api_key_tmdb
            }
        }).then(response => {
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    })
    return promise;
}

const getMovie = (data_url) => Get(`movie${data_url? '/'+data_url : ''}`);
const getGenres = (data_url) => Get(`genre/movie/list`);
const getCertificationMovileList = () => Get(`certification/movie/list`);

const API = {
    getMovie,
    getGenres,
    getCertificationMovileList
}

export default API;