
import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import TaskForm from './Components/TaskForm';

function App() {

  
  return (
    <div className="App">
     
     <BrowserRouter>
        <Routes>
          <Route path = '/' exact element = {<Home/>} />
          <Route path = '/login'  element = {<Login/>} />
          <Route path = '/signup' element = {<SignUp/>} />
          <Route path = '/task' element = {<TaskForm/>} />
          
        </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
