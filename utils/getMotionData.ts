import { MotionDataType } from "../types"

import { DeviceMotion } from "expo-sensors";

export const addMotionListener=(setMotionData:React.Dispatch<React.SetStateAction<MotionDataType>>)=>{
//if interval set too low gets infinite rerenders...
DeviceMotion.setUpdateInterval(100)
          DeviceMotion.addListener(deviceData => {
            setMotionData(deviceData.rotation);
          })
   
}