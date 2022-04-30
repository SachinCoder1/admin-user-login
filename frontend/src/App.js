import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import User from './components/user/User';
import Admin from './components/admin/Admin';
import Login from './components/user/Login';
import { signupAdmin, signupUser } from './api/Api';

function App() {
  return (
<BrowserRouter>
<Navbar />
  <Routes>
    <Route path='/' element={<User />} />
    <Route path='/login' element={<Login signupUser={signupUser} link="/" />} />
    <Route path='/adminlogin' element={<Login signupUser={signupAdmin} link="/admin" />} />
    <Route path='/admin' element={<Admin />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
