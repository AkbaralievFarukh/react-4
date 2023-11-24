import React from "react";
import {Link} from "react-router-dom";

const IngredientList = ({ingredients}) => {
    return (
        <div className={'row mt-5'}>
            <div className="col-12">
                <div className="box-title">
                    <h2 className={'ingTitle'}>Ingredients</h2>
                </div>
            </div>
            {
                ingredients.map((ingredient, idx) =>
                <div className={'col-2'} key={idx}>
                    <div className={'card'}>
                        <div className={"card-img"}>
                            <img className={'ingredientImg'} src={`https://www.themealdb.com/images/ingredients/${ingredient?.ingredient}.png`} alt=""/>
                        </div>
                        <div className={"card-body"}>
                            <h5 className={'ihgSubtitle'}>
                                <Link to={`/ingredient/${ingredient?.ingredient}`} className={'card-title'}>
                                    {`${ingredient?.ingredient}`}
                                </Link>
                            </h5>
                            <h6 className={'card-text'}>{`${ingredient?.measure}`}</h6>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default IngredientList