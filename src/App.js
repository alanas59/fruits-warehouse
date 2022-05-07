import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Inventory from './Pages/Inventory/Inventory';
function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
