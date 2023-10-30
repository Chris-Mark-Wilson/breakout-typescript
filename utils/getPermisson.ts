import { GyroType } from "../types"
import { DeviceMotion, Gyroscope } from "expo-sensors"

export const getPermission=()=>{
return DeviceMotion.getPermissionsAsync()
.then(response=>{
    return response
})
}