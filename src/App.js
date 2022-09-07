import Funding from "./components/funding";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import './style.css'

function App() {
  return (
    <>
      <Navbar/>
      <div style={{display:"flex"}}>
        <Sidebar />
        <Funding />
      </div>
    </>
  );
}

export default App;
