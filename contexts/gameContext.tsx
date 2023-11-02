import { createContext,useState } from "react";
import { BallProps } from "../types";
import { GameProviderProps } from "../types";
import { GameContextProps } from "../types";
import { BatProps } from "../types";
import { Dimensions } from "react-native";
import { MotionDataType } from "../types";
import { BrickType } from "../types";


export const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider:React.FC<GameProviderProps> = ({children}) => {

    const [ballCoords, setBallCoords] = useState<BallProps>({ x: 0, y: 0,direction:45 });
    const [gameOver, setGameOver] = useState(true);
    const [batProps, setBatProps] = useState<BatProps>({ x: 0, y: 0, width: 50 });
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const [motionData, setMotionData] = useState<MotionDataType>({
        alpha: 0,
        beta: 0,
        gamma: 0,
      });
      const [brickArray, setBrickArray] = useState<Array<BrickType>>([]);


    return (
        <GameContext.Provider value={{
            ballCoords,setBallCoords,
            gameOver,setGameOver,
            batProps,setBatProps,
            windowWidth,
            windowHeight,
            motionData,
            setMotionData,
            brickArray,setBrickArray,
     
        }}>
        {children}
        </GameContext.Provider>
    )
}