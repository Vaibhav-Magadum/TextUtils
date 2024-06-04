
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
        <Navbar title = "TextUtils"/>
        <TextForm heading = "Add your text below:" />
    </div>
  );
}

export default App;
