import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("");
    const [sortGoodBad, setSortGoodBad] = useState(null)
    
    
    useEffect(() => {
       axios.get(`https://api.themoviedb.org/3/search/movie?api_key=24080f32f13fdd275fd70aa643853aed&query=${search}`)
       .then((res) => setMoviesData(res.data.results))
    }, [search])

    const handleTop = () => {
        setSortGoodBad("goodToBad")
    }
    const handleFlop = () => {
        setSortGoodBad("badToGood")
    }

    return (
        <div className='form-component'>
            <form className='form-container' action="">
                <input type="text" placeholder="Entrez le titre d'un film" id="search-input" onChange={(e) => setSearch(e.target.value)} />
                <input type="submit" value="rechercher" />
            </form>
            <div className="btn-sort-container">
                <div className="btn-sort" id="goodToBad" onClick={handleTop}>Top <span>→</span></div>
                <div className="btn-sort" id="badToGood" onClick={handleFlop}>Flop <span>←</span></div>
            </div>
            <div className="result">
                {
                    moviesData
                    .slice(0, 12)
                    .sort((a, b) => {
                        if(sortGoodBad === "goodToBad") {
                        return b.vote_average - a.vote_average;
                        } else if(sortGoodBad === "badToGood")  {
                        return a.vote_average - b.vote_average; }
                    })
                    .map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Form;