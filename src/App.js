import logo from './logo.svg';
import './App.css';
import Navber from './Navber/Navber';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home/Home';
import Product from './Product/Product';
import Contact from './Contact/Contact';
import About from './About/About';
import SignIn from './SignIn/SignIn';
import SignUp from './SingUp/SignUp';
import RequireAuth from './RequireAuth';
function App() {
  return (
    <div >
    <Navber></Navber>
    <Routes>
    <Route path='/' element={<SignIn></SignIn>}></Route>

    <Route path='/home' element={<RequireAuth><Home></Home></RequireAuth>}>

    </Route>
    <Route path='/product' element={<RequireAuth>
    <Product></Product></RequireAuth>
    }></Route>
    <Route path='/contact' element={<RequireAuth>
    <Contact></Contact></RequireAuth>}></Route>
    <Route path='/about' element={<RequireAuth>
    <About></About></RequireAuth>}></Route>
    <Route path='/login' element={<SignIn></SignIn>}></Route>
    <Route path='/signup' element={<SignUp></SignUp>}></Route>
    </Routes>

    </div>
  );
}

export default App;
