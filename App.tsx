import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';

import {Dimensions} from 'react-native';
import { createNewWall } from './utils/createNewWall';
import { BrickType } from './types';
import { Wall } from './components/Wall';
import { Ball } from './components/Ball';
import { BallProps } from './types';
import { Bat } from './components/Bat';
import { BatProps } from './types';
import { GyroType } from './types';
import { getPermission } from './utils/getPermisson';
import { getGyroData } from './utils/getGyroData';

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  const[brickArray,setBrickArray]=useState<Array<BrickType>>([])
  const [ballCoords,setBallCoords]=useState<BallProps>({x:0,y:0})
 const [bat,setBat]=useState<BatProps>({x:0,y:0,width:50})
 const [gyro,setGyro]=useState<GyroType>({alpha:0,beta:0,gamma:0})

//initial setup
useEffect(()=>{
  const startY=windowHeight-60;
  const startX=windowWidth/2;
  console.log(startX,startY)
createNewWall(setBrickArray);
setBat((bat)=>{
  return {x:(windowWidth/2)-(bat.width/2),y:windowHeight-50,width:50}
})
setBallCoords((coords)=>{
  const newCoords={...coords}
  newCoords.x=startX;
  newCoords.y=startY;
  return newCoords;
}
  )
console.log(brickArray.length)

 getPermission()
.then(response=>{
  console.log(response)
})

},[])
//end initial setup
useEffect(()=>{
  getGyroData(setGyro)

setBat((curr):BatProps=>{
  const newPos={...curr}
newPos.x+=gyro.beta*100
if(newPos.x<0)newPos.x=0
if(newPos.x>windowWidth-bat.width)newPos.x=windowWidth-bat.width
  return newPos
})
},[gyro])

  
  return (
    <>
     <View style={styles.container}>
      {/* <Text style={{position:"absolute",top:"90%",left:"40%"}}>Width={windowWidth} Height={windowHeight}</Text> */}
     <Wall brickArray={brickArray}/>
     <Ball x={ballCoords.x} y={ballCoords.y}/>
     <Bat x={bat.x} y={bat.y} width={bat.width}/>
        <StatusBar style="auto" />
     </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
position:"absolute",

    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent:"center",
   borderWidth:1,

   borderColor:"red",
width:"100%",
height:"90%",
top:"10%"
    
  },
});
