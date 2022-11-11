import {useState} from "react";
import styled from "styled-components";

const Search = () => {
    const [term, setTerm] = useState(``)
    return (
        <>
            {/*<label htmlFor="search"/>*/}
            <SearchInput type="search" name="search" id="search" placeholder={"Search for hostels"} value={term} />
        </>
    )
}

const SearchInput = styled.input`
  width: 300px;
  @media (max-width: 400px){
    width: 120px;
  }
`
export default Search