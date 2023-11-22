import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={"pt-4 pb-4 bg-dark"}>
            {/*<a href={"/"}>Header</a>*/}
            {/*<a href={"/search"}>Search</a>*/}
            <div className={"d-flex justify-content-between container"}>
                <Link to={"/"} className={"btn btn-primary"}>Home</Link>
                <Link to={"/search"} className={"btn btn-primary"}>Search</Link>
            </div>
        </header>
    )
}

export default Header