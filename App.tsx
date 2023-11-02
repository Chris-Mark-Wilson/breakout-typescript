import { GameProvider } from "./contexts/gameContext";
import { GameScreen } from "./components/GameScreen";

export default function App() {

  return (
    <>
    <GameProvider>
<GameScreen/>
      </GameProvider>
    </>
  );
}


