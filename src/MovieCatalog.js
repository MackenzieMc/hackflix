//Import the axios library

//Import useState Hook and useEffect hook
import axios from 'axios';
import { useEffect, useState } from 'react';



//In order to recreate the behaviour of an anchor with the added benefit/logic of React Router, we can use the Link component
import { Link } from 'react-router-dom';

function MovieCatalog() {

    console.log('Catalog has rendered');

    //3. initialize state to keep track of the movie data which will be returned from the API
    const [movies, setMovies] = useState([]);

    //4. itialize a useEffect to run the side effect of fetching data from the API
    useEffect( () => {

        console.log('side effect is running');
        //5.Make an async request to the TMBB API using axios
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '438f9921b5287c90f91cf32070a635f1',
                include_adult: false
            }
        }).then( (showMeTheMovies) => {
            console.log(showMeTheMovies);
            //6. Save the returned data within state
            setMovies(showMeTheMovies.data.results)
        })
    

    }, [] )


    return (
        <section>
            <h2>Here are your viewing options:</h2>
            {/* //7. map through state andreturn a movie for each movie present in the returned API data. */}
            <ul className="catalogue">
                {
                    movies.map( function(movie) {
                        return (
                            <Link to={`/${movie.id}`} key={movie.id}>
                                <li>
                                    <img 
                                    src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                    alt={`A poster for the movie ${movie.title}`} />
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>

        </section>

    )
}



export default MovieCatalog;