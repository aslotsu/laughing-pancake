import {useState} from "react";
import styled from "styled-components";

const Search = () => {
    const [term, setTerm] = useState(``)

    const searchHandler=(event) => {
        setTerm(event.target.value)
        console.log(term)
    }
    return (
        <Home>
            <SearchInput type="search" name="search" id="search" placeholder={"Search for hostels"} value={term} onChange={searchHandler} />
            <GoSearch>Search</GoSearch>
        </Home>
    )
}

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchInput = styled.input`
  width: 25vw;
  height: 30px;
  //border-radius: 12px;
  padding: 16px;
  border: none transparent;
  outline: none transparent;

  min-width: 200px;
  @media (max-width: 400px){
    width: 120px;
  }
  
  &:focus {
    outline: none transparent;
    border-top: none transparent;
    border-left: none transparent;
    border-right: none transparent;
    border-bottom: 3px solid #00347d;
  };
  
  transition: all 0.2s ease;
`

const GoSearch = styled.button`
  background-color: transparent;
  border: 2px solid #00347d;
  border-radius: 6px;
  padding: 8px;
  margin: 10px 10vw;
  color: #00347d;
  width: 100px;
  font-size: 1.222rem;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease;
  }
  //margin-left: 10vw;
`
export default Search