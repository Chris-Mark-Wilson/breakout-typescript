
import { DeviceMotion} from "expo-sensors"

export const getPermission=()=>{
return DeviceMotion.getPermissionsAsync()
.then(response=>{
    return response
})
}