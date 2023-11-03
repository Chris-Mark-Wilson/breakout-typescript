import { View } from "react-native"
import { useContext } from "react"
import { GameContext } from "../contexts/gameContext"
import { useEffect } from "react"
import { getPermission } from "../utils/getPermisson";
import { addMotionListener } from "../utils/getMotionData";
import { BatProps } from "../types";
import { useState } from "react";
export const Bat=()=>{
    const gameContext=useContext(GameContext)
    if(!gameContext) return <></>;
    const{batProps,setBatProps,motionData,setMotionData,windowWidth,windowHeight}=gameContext
    const [count,setCount]=useState(0)

    useEffect(()=>{//initial setup
        getPermission().then((response) => {
            if (response.granted) {
              addMotionListener(setMotionData);
              setBatProps((bat) => {
                const newBat={...bat}
                newBat.x= windowWidth / 2 - bat.width / 2
                newBat.y=windowHeight - 50,
                newBat.width=100
                  return newBat
                });
               
            }
        })

    },[])

    useEffect(()=>{
      setTimeout(()=>{
setCount(count=>count+1)
      },200)
    },[count])
    

    useEffect(() => {//listen for motion and move bat
        if (motionData.beta) {
          setBatProps((curr): BatProps => {
            const newPos = { ...curr };
            newPos.x += motionData.beta * 100;
            if (newPos.x < 0) newPos.x = 0;
            if (newPos.x > windowWidth - curr.width)
              newPos.x = windowWidth - curr.width;
            return newPos;
          });
         
        }
      }, [count]);

return(
    <View style={{width:batProps.width,height:10,backgroundColor:"black",position:"absolute",top:batProps.y,left:batProps.x,borderTopWidth:10,borderRadius:batProps.width/2}}></View>
)
}