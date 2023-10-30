
import { WallProps } from "../types"
import { FC } from "react"
import { Brick } from './Brick';

export const Wall :FC<WallProps>= (props) :JSX.Element=>{
 const {brickArray}=props
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