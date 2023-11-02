import { ReactNode } from "react"

export interface BrickType {
    id:number,
  height:number,
  width:number,
  colour:string,
  top:number,
  left:number
}
export interface WallProps{
    brickArray:BrickType[]
}
export interface BallProps{
  x:number,
  y:number,
  direction:number
}
export interface BatProps{
  x:number,
  y:number,
  width:number
}

export interface MotionDataType{
  alpha:number,
  beta:number,
  gamma:number
}

export interface GameProviderProps{
  children:ReactNode
}
export interface  GameContextProps {
  ballCoords: BallProps;
  setBallCoords: React.Dispatch<React.SetStateAction<BallProps>>;
  gameOver:Boolean;
  setGameOver:React.Dispatch<React.SetStateAction<boolean>>;
  batProps:BatProps;
  setBatProps:React.Dispatch<React.SetStateAction<BatProps>>;
  windowWidth:number;
  windowHeight:number;
  motionData:MotionDataType;
  setMotionData:React.Dispatch<React.SetStateAction<MotionDataType>>;
  brickArray:BrickType[];
  setBrickArray:React.Dispatch<React.SetStateAction<BrickType[]>>;
}