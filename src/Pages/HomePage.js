import React, {useEffect, useState} from "react";
import axios from "axios";
import MealList from "../Components/MealList";

const HomePages = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({ data }) => setMeals(data.meals))
    }, []);

    return (
        <main>
            <section className={'imgSection'}>
                <div className={'text-center pt-4 pb-4'}>
                    <h1>Home page</h1>
                </div>
            </section>
            <section className={'mainPage'}>
                <div className={'container'}>
                    <MealList meals={meals}/>
                </div>
            </section>
        </main>
    )
}

export default HomePages