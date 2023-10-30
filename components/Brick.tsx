import { StyleSheet, View } from "react-native";
import { FC } from "react";
interface BrickProps {
    height:number
    width:number,
    colour:string,
    top:number,
    left:number
}
export const Brick: FC<BrickProps> = (props): JSX.Element => {
    const {height,width,colour,top,left}=props;
  return (
    <View style={[styles.brickContainer,{padding:1,paddingBottom:1,flexDirection:"row",height: height, width:width, top:top,left:left}]}>
      <View
      style={{flex:1,backgroundColor:colour,height:height-1,width:width}}
      />
      </View>
      );
    
};

const styles = StyleSheet.create({
brickContainer:{
    position:"absolute",
    display:"flex",
border:1,
    alignItems:"center",
    justifyContent:"center"
}
});
