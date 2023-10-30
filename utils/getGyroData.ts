import { GyroType } from "../types"
import { Gyroscope } from "expo-sensors";
import { DeviceMotion } from "expo-sensors";

export const getGyroData=(setGyro:React.Dispatch<React.SetStateAction<GyroType>>)=>{
DeviceMotion.setUpdateInterval(200)
          DeviceMotion.addListener(gyroscopeData => {
// console.log(gyroscopeData,"in function")
            setGyro(gyroscopeData.rotation);
          })
   
}