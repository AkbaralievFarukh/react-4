import React, {useState} from "react";
import axios from "axios";
import MealList from "./MealList";

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                .then(({ data }) => {
                    if (data.meals) {
                        setSearchResult(data.meals);
                        setError('');
                    } else {
                        setSearchResult([]);
                        setError('No results');
                    }
                    setSearchTerm('')
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                    setSearchResult([]);
                    setError('Data loading error');
                    setSearchTerm('')
                });
        } else {
            setError('Enter your request');
            setSearchResult([])
        }
    };

    return (
        <div className={"d-flex flex-column justify-content-center align-items-center"}>
            <div className={'d-flex justify-content-center align-items-center gap-2 mb-5'}>
                <input className={'p-1'} type="text" placeholder='Введите название' value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)} name="" id=""/>
                <button className={'btn btn-secondary'} onClick={handleSearch} >OK</button>
            </div>
            {error && <h6 className={"text-white rounded-pill mt-4 p-3 bg-dark"}>{error}</h6>}
            <div>
               <MealList meals={searchResult}/>
            </div>
        </div>
    )
}

export default SearchInput