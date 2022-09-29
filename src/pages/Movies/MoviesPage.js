import { useEffect } from "react";
import axios from "axios";

const MoviesPage = () => {
    useEffect(()=>{
        document.title = 'Movies - nontonKuy';
    })
    return(
        <div>Movies List</div>
    )
}

export default MoviesPage;