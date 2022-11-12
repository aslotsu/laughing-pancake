import {hostels} from "../hostels";
import styled from "styled-components";
import Search from "./Search";
// import Lisa from "../assets/hostels/delisa.jpg"

const HomeBody = () => {

    return  (
        <>
            <SafeBar />
            <Search />
            <List>
            {hostels.map(hostel =>
                    <Card key={Math.random()}>

                        <Image>
                            {/*<HostelImage src={Lisa} alt=""/>*/}
                        </Image>
                        <Info>
                            <span>{hostel.name}</span>
                            <span>{hostel.location}</span>
                            {/*<span>{hostel.pictures}</span>*/}
                        </Info>
                    </Card>
            )}
            </List>
        </>
 )
}

const Card = styled.div`
  margin: 40px;
  height: 30vh;
  min-height: 200px;
  width: 20vw;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  min-width: 200px;
  border: 6px solid #00347d;
  
  
  & span {
    font-weight: bolder;
  }
  &:hover {
    cursor: pointer;
    scale: 1.2;
    transition: all 1.2s ease;
  }

`

const Image = styled.img`
  
`

const SafeBar = styled.div`
  width: 100%;
  height: 20vh;
`

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 80vw;
  margin: 0 10vw;
  
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: calc(30vh - 50px);
  left: 0;
  right: 0;
  height: 40px;
  width: 100%;

`




export default HomeBody