import { View } from "react-native"
import {BallProps} from "../types"
import { FC } from "react"

export const Ball:FC<BallProps>=(props):JSX.Element=>{
    const{x,y}=props;

return(
    <View style={{width:10,height:10,backgroundColor:"black",position:"absolute",top:y,left:x}}></View>
)
}