import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const {favorites} = useMovieContext();

    if(favorites){
      return  (
        <div className='favorites'> 
            <h2>Favorites Movies</h2>
            <div className="movies-grid">
                {favorites.map( (movie) => 
                    (<MovieCard  movie = {movie} key = {movie.id} />)
             )}
            </div>
        </div>
      );
    }else {
         return <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies ot your favorites and they willer apper her</p>
         </div>
    }
}

export default Favorites;