import React from "react";
import {Search, SearchDiv, SpanIcon, SpanIndex} from "./searchBar.style";
import {AiOutlineSearch} from 'react-icons/ai'

export const GlobalFilter = ({ filter, setFilter}) => {
    return (
        // <SearchDiv>
        //     <SpanIcon><AiOutlineSearch /></SpanIcon>
        //     <Search placeholder="Search all.................................." value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
        //     <SpanIndex />
        // </SearchDiv>
    
        <Search name="searchbar" id="searchbar" placeholder="Search all.................................." value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    )
}