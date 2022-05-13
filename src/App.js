import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/To-do/Card';

function App() {
  return (
    <>
    <Navbar/>
     <h1 className='text-center'> To-Do</h1>
     <Card/>
    </>
  );
}

export default App;
