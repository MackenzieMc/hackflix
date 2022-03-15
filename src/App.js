import './index.css';

//import 2 peices from the Router librbary which will allow us to configure the routes within this app
import { Routes, Route } from 'react-router-dom';


//Import components
import Header from './Header';
import MovieCatalog from './MovieCatalog';
import MovieInfo from './MovieInfo';





function App() {
  return (
    <div className="wrapper">
      {/* This app consists of three components: */}
      {/* Header */}
      <Header />

      {/* Now we need to define our routing configuration (this is often done within the App component) */}

      {/* step 1: Use the Routes component to act as a parent container to all of the subsequently defined routes AKA defined URL paths */}
      <Routes>
        {/* Step 2: Define the invividual routes / URL paths which are available within your app, as well as the compoenents whcih are visibile at those paths */}
        {/* Here is where you will define which component is visibile at what path */}
        <Route path="/" element={ <MovieCatalog /> } />

        {/* The MovieInfo componenent should be shown when the route looks like:  */}
        {/* www.homepage.com/movieID here */}
        <Route path="/:movieId" element={ <MovieInfo /> }></Route>
      </Routes>

      {/* Movie Catalog */}
      {/* This componenet is only visibile on the home page */}

      {/* a movie details component (which is rendered when the user selects a movie) */}
    </div>
  );
}

export default App;
