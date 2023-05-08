import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home';
import Signup from './components/Login/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const token =localStorage.getItem('accessToken')
  console.log(token)
  
  return (
    <div>
      <BrowserRouter>
          <Routes>
            {
              token?(
                <Route path="/" Component={Home} />
              ):(
                <Route path="/" Component={Login} />
              )
            }
            <Route path="/Signup" element={<Signup/>} />
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
