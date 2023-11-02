import { View } from "react-native";
import { BallProps, GameContextProps } from "../types";

import { useState, useEffect, useContext } from "react";
import { getNewCoords } from "../utils/getNewCoords";
import { GameContext } from "../contexts/gameContext";

export const Ball = (): JSX.Element => {
  const { batProps, windowWidth, windowHeight, gameOver } = useContext(
    GameContext
  ) as GameContextProps;
  const [ballCoords, setBallCoords] = useState<BallProps>({
    x: 0,
    y: 0,
    direction: 45,
  });

  //initial setup
  useEffect(() => {
    const startY = windowHeight - 60;
    const startX = windowWidth / 2;
    setBallCoords((coords) => {
      const newCoords = { ...coords };
      newCoords.x = startX;
      newCoords.y = startY;
      return newCoords;
    });
  }, []);
  //end initial setup

  useEffect(() => {
    if (!gameOver) {
      setTimeout(() => {
        getNewCoords(
          ballCoords,
          setBallCoords,
          windowWidth,
          windowHeight,
          batProps
        );
      }, 200);
    }
  }, [gameOver, ballCoords]);

  return (
    <View
      style={{
        width: 10,
        height: 10,
        backgroundColor: "black",
        position: "absolute",
        top: ballCoords.y,
        left: ballCoords.x,
      }}
    ></View>
  );
};
