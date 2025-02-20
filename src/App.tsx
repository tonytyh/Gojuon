import { Box, VStack } from "@chakra-ui/react";
import GojuonBoard from "./components/gojuon/GojuonBoard";
import { GojuonTestBoard } from "./components/gojuon/GojuonTestBoard";
import { Header } from "./components/header/header";
import FloatingNav from "./components/nav/Navigation";
import { useModeStore } from "./GlobalContext";
import "./App.css";


function App() {

  const { mode } = useModeStore();
  return (

    <VStack className="App">
      <Header />
      <Box className="App-Body">
        {mode === "gojuon" && <GojuonBoard />}
        {mode === "test" && <GojuonTestBoard />}
      </Box>
      <FloatingNav />
    </VStack>
  );
}

export default App;
