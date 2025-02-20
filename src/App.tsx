import { Footer } from "./components/footer/footer";
import GojuonBoard from "./components/gojuon/GojuonBoard";
import { GojuonTestBoard } from "./components/gojuon/GojuonTestBoard";
import { Header } from "./components/header/header";
import FloatingNav from "./components/nav/Navigation";
import { useModeStore } from "./GlobalContext";


function App() {

  const { mode } = useModeStore();
  return (
    <div className="App">
      <Header />
      <FloatingNav />
      {mode === "gojuon" && <GojuonBoard />}
      {mode === "test" && <GojuonTestBoard />}
      <Footer />
    </div>
  );
}

export default App;
