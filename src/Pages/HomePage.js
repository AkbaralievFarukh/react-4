import React, {useEffect, useState} from 'react';
import Header from "../Components/Header";
import axios from "axios";
import MealList from "../Components/MealList";

const HomePage = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data.meals))
    }, [])
    return (
        <>
            <div className={"container"}>
                <Header />
                <h2>Home Page</h2>
                <MealList meals={meals} />
            </div>
        </>
    )
}

export default HomePage