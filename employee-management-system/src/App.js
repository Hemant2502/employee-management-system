// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Register from  './Components/Register';
import Login from './Components/Login';
import Showdata from './Components/Showdata';
import EditEmployee from './Components/EditEmployee';


function App() {
  return (
    <div className="App">
      <Router>
      < Navbar />
  

      <Routes>
        <Route path='/register' element={< Register />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/showData' element={<Showdata />} />
        <Route path='/edit/:id' element={<EditEmployee />} />
      </Routes>

    </Router>



    </div>
  );
}

export default App;