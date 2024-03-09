import './App.css';
import Homepage from './component/Homepage';
import Navbar from './component/navbar';
import Blogs from './component/blog';

function App() {
  return (
    <div className="App">
      <Blogs />
      <Navbar />
      <Homepage />
      </div>
  );
}

export default App;
