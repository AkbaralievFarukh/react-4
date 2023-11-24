import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header bg-dark pt-4 pb-4'}>
            <div className={'container'}>
                <div className={'d-flex justify-content-between align-items-centr'}>
                    <Link to={'/'} className={'btn btn-light'}>Home</Link>
                    <Link to={'/search'} className={'btn btn-light'}>Search</Link>
                </div>
            </div>
        </header>
    )
}

export default Header