import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const UserList = ({movie}) => {
    const [listData, setListData] = useState([]);

    // const handleStorage = (e) => {
    //     setListData(e.target.value);
    // }
    useEffect( () => {
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(',') : [];

        for (let i=0; i < moviesId.length; i++) {

            axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=24080f32f13fdd275fd70aa643853aed&language=en-US`)
            .then(res => setListData((listData) => [... listData, res.data]))
        }
    }, [])

    return (
        <div className='user-list-page'>
           <Header />
           <h2>Coup de coeur</h2>
           <div className="result">
                {
                    listData.length > 0 ? listData.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    )) : <h2>liste vide !</h2>
                }
           </div>
        </div>
    );
};

export default UserList;