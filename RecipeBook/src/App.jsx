import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import List from "./components/List";
function App() {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <List />
      <Footer />
    </div>
  );
}

export default App;
