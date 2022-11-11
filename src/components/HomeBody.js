import {hostels} from "../hostels";
import styled from "styled-components";
import Lisa from "../assets/hostels/delisa.jpg"

const HomeBody = () => {

    return  (
        <>
            <SafeBar />
            <List>
            {hostels.map(hostel =>
                    <Card key={Math.random()}>

                        <div>
                            {/*<HostelImage src={Lisa} alt=""/>*/}
                        </div>
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
    //color: dodgerblue;
    //font-size: 2rem;
    font-weight: bolder;
  }
  //box-shadow: 1px 1px 1px red;
  &:hover {
    cursor: pointer;
    scale: 1.2;
    transition: all 1.2s ease;
  }

`

const HostelImage = styled.img`
    height: 50px;
    width: 50px;
    object-fit: contain;
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
  //border: 2px solid greenyellow;
  margin: 0 10vw;
  
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid dodgerblue;
  position: relative;
  top: calc(30vh - 50px);
  left: 0;
  right: 0;
  height: 40px;
  width: 100%;

`
export default HomeBody