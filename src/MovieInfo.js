//import axios so that we can make some async requests
import axios from "axios";

import {useState, useEffect} from 'react';

//We want to use the movie ID which is currently in the URL (at which this component renders) within our acios call
//in order to grab information from a URL (when using a Router) we can use the useParams hook

import {useParams} from 'react-router-dom';


function MovieInfo() {

    // Call useParams hook and see what it returns
    // console.log(useParams());

    //Call useParams Hook and extract the movieID property from within the params object it returns
    const { movieId: movie_id } = useParams();

    //initialize state to represent the movie details which will be returned to us from the API
    const [details, setDetails] = useState({})
    
    //define a side effect which will fetch data about the movie after the componenet has first rendered
    useEffect( () => {

        // Use axios to make a request to the movieID endpoint
        axios({
            url: `https://api.themoviedb.org/3/movie/${movie_id}`,
            params: {
                api_key: '438f9921b5287c90f91cf32070a635f1'
            }
        }).then( (movieInfo) => {
            console.log(movieInfo);

            //use the API data and update state
            setDetails(movieInfo.data)
        })


        //specify that this side-effect should only be used one time after the componenet has first rendered


    }, [] )



    return (
        <section className="poster">
            <div className="description">
                <h3>{ details.tagline }</h3>
                <h2>{details.title}</h2>
                <p>{details.overview}</p>
            </div>
            <div className="poster-image">
                {/* render the movie poster */}
                <img 
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt={`Poster for the movie ${details.title}`}
                />

            </div>
        </section>
    )
}

export default MovieInfo;