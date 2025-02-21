import { Box, VStack } from "@chakra-ui/react";
import GojuonBoard from "./components/gojuon/GojuonBoard";
import { GojuonTestBoard } from "./components/gojuon/GojuonTestBoard";
import { Header } from "./components/header/header";
import FloatingNav from "./components/nav/Navigation";
import { useModeStore } from "./GlobalContext";
import "./App.css";
import { addMetric } from "./metrics/metric";
import { useEffect } from "react";


function App() {
  const { mode } = useModeStore();

  useEffect(() => {
    addMetric({'page':'App', action:'render'});
  }, [mode]);

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
