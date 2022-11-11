import styled from "styled-components";
import Search from "./Search";

const Nav = () => {
    return (
    <NavBar>
        <BigName>Milestorm</BigName>
        <Search/>
        <div>
            <a href="/">About</a>
            <a href="/">Further</a>
            <a href="/">Lesser</a>
        </div>
    </NavBar>)
}

const NavBar = styled.nav`
  display: flex;
  z-index: 4;
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
    color: white;
    font-size: 3.5rem;
    @media (max-width: 400px) {
      font-size: 1rem;
    }
  }
  & a {
    color: white;
    text-decoration: none;
  }
`

const BigName = styled.h2`
  @media (max-width: 800px){
    font-size: 10px;
  }
`



export default Nav