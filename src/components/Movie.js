import PropTypes from "prop-types";
import {Link} from  "react-router-dom";
import styles from "./Movie.module.css";
function Movie({id,coverImg, title, summary, genres}){
    return (
    <div className={styles.movies}>
        <img className={styles.movies__img} src={coverImg} alt="title"/>
        <div className={styles.movies__info}>
        <h2 className={styles.movies__title}>
            <Link to={`/movie/${id}`}>
            {title.length>30?title.slice(0,30)+"..." : title}
            </Link>
            </h2>
        <p className= {styles.movies__summary}>{
            summary.length > 100 ? summary.slice(0, 200)+"...": summary
            }</p>
        <ul className={styles.movies__genres}>
            {genres.map((g)=>(
                <li key={g}>{g}</li>
                ))}
        </ul>
        </div>   
    </div> 
    )
    } 
    Movie.propTypes ={
        id:PropTypes.number.isRequired,
        coverImg: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    }
export default Movie;