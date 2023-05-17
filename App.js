import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <> 
    <Navbar title="TextUtils" homeText="Home" aboutText="React App!" searchText="Search"/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyse" />
    </div>
    </>
  );
}

export default App;
