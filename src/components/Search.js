import {useState} from "react";
import styled from "styled-components";

const Search = () => {
    const [term, setTerm] = useState(``)

    const searchHandler=(event) => {
        setTerm(event.target.value)
        console.log(term)
    }
    return (
        <div>
            <SearchInput type="search" name="search" id="search" placeholder={"Search for hostels"} value={term} onChange={searchHandler} />
            <GoSearch>Search</GoSearch>
        </div>
    )
}

const SearchInput = styled.input`
  width: 300px;
  @media (max-width: 400px){
    width: 120px;
  }
`

const GoSearch = styled.button`
  background-color: transparent;
  border: 2px solid white;
  border-radius: 6px;
  padding: 8px;
  color: white;
  font-size: 1.222rem;
  &:hover {
    transform: scale(1.2);
    transition: all 0.8s ease;
  }
`
export default Search