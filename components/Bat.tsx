import { View } from "react-native"
import {BatProps} from "../types"
import { FC } from "react"

export const Bat:FC<BatProps>=(props):JSX.Element=>{
    const{x,y,width}=props;

return(
    <View style={{width:width,height:10,backgroundColor:"black",position:"absolute",top:y,left:x}}></View>
)
}