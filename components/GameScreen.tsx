import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Wall } from "../components/Wall";
import { Ball } from "../components/Ball";
import { Bat } from "../components/Bat";
import { GameContext } from "../contexts/gameContext";
import { useContext } from "react";

export const GameScreen = () => {

  const gameContext = useContext(GameContext);
  if (!gameContext) return null;
  const {
  gameOver,setGameOver
  } = gameContext;







  

  const onPressHandler = () => {
    setGameOver(false);
  };

  return (
    <View style={styles.container}>
      {gameOver && (
        <Pressable style={styles.pressable} onPress={onPressHandler}>
          <Text>Tap to start</Text>
        </Pressable>
      )}
      <Wall />
      <Ball />
      <Bat />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",

    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,

    borderColor: "red",
    width: "100%",
    height: "90%",
    top: "10%",
  },
  pressable: {
    backgroundColor: "white",
    position: "absolute",
    top: "70%",
    left: "70%",
  },
});
