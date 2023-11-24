import React from "react";
import SearchInput from "../Components/SearchInput";

const SearchPage = () => {
    return (
        <main>
            <section>
                <div className={'text-center pb-4 pt-4'}>
                    <h1>Search page</h1>
                </div>
            </section>
            <section>
                <div className={'container'}>
                    <div>
                        <SearchInput />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SearchPage