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
  y:number
}
export interface BatProps{
  x:number,
  y:number,
  width:number
}