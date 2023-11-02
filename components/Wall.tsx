
import { WallProps } from "../types"
import { FC } from "react"
import { Brick } from './Brick';
import { useEffect } from "react";
import { useContext } from "react";
import { GameContext } from "../contexts/gameContext";
import { createNewWall } from "../utils/createNewWall";

export const Wall= () =>{
  const gameContext=useContext(GameContext);
  if(!gameContext)return <></>
  const {brickArray,setBrickArray}=gameContext


useEffect(()=>{
  createNewWall(setBrickArray);
},[])


    return(<>
        {brickArray.map((brick)=>{
            return(
              <Brick
              key={brick.id}
              height={brick.height} 
              width={brick.width}
              colour={brick.colour}
              top={brick.top}
              left={brick.left}/>
              )
            })}
            </>
    )

}