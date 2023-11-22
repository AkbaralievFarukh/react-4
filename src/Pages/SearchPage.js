import React, {useState} from 'react';
import Header from "../Components/Header";
import MealList from "../Components/MealList";
import axios from "axios";

const SearchPage = () => {
    const [value, setValue] = useState([])
    const [name, setName] = useState('')
    const searchMealsByName = () => {
        axios(`https://www.themealdb.com/api/json/v2/1/search.php?s=${name}`)
            .then(({data}) => setValue(data.meals))
    }
    console.log(value)
    const handleGetValue = (e) => {
        setName(e.target.value)
        console.log(name)
    }
    return (
        <div>
            <Header />
            <div className={"container"}>
                <h2 className={"text-center mt-3 mb-3"}>Search</h2>
                <div className={"d-flex justify-content-center align-items-center gap-2 mb-3"}>
                    <input type="text" className={"p-1"} onChange={handleGetValue}/>
                    <button className={"btn btn-danger"} onClick={searchMealsByName}>Search</button>
                </div>
                <MealList meals={value} />
            </div>
        </div>
    )
}

export default SearchPage