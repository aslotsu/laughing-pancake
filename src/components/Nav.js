import styled from "styled-components";
import search from "../assets/Search.png"

const Nav = () => {
    return (
    <NavBar>
        <BigName>Milestorm</BigName>
        <div className="x">
            <input type="search" name="hotel" id="hotel" placeholder="Search for hotels"/>
            <Search src={search} alt=""/>
        </div>
        <div>
            <a href="/">About</a>
            <a href="/">Further</a>
            <a href="/">Lesser</a>
        </div>
    </NavBar>)
}

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  min-width: 400px;
  height: 20vh;
  min-height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00347d;
  justify-content: space-around;
  align-items: center;
  & input {
    width: 90%;
    height: 40px;
    border: none;
    min-width: 200px;
    border-radius: 20px;
    padding: 0 20px;       
    outline: white;
    
  }
   & div {
     width: 25%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     //border: 1px solid green;
   }
  
  & h2 {
    color: dodgerblue;
  }
  & a {
    color: white;
    text-decoration: none;
  }
`

const Search = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
`

const BigName = styled.h2`
  //max-width: 150px;
  @media (max-width: 800px){
    font-size: 10px;
  }
`

export default Nav