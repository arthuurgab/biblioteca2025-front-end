import Navbar from "./components/ui/Navbar";
import ButtonsHome from "./pages/home/Buttons";
import Cards from "./pages/home/Cards";

function App() {
  return (
    <div className="space-y-4">
      <Navbar />
      <ButtonsHome />
      <Cards />
    </div>
  );
}

export default App;
