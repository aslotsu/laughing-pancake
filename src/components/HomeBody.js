import {hostels} from "../hostels";
import styled from "styled-components";

const HomeBody = () => {

    return  (
        <>
            <SafeBar />
            <List>
            {       hostels.map(hostel =>


                    <Card key={Math.random()}>
                        <span>{hostel.name}</span>

                        {/*<span>{hostel.prices.map(price => <span>{price}</span>)}</span>*/}
                        <br/>
                        <span>{hostel.location}</span>
                        <span>{hostel.pictures}</span>
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
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  min-width: 200px;
  border: 6px solid #00347d;
  padding: 70px;
  
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
export default HomeBody