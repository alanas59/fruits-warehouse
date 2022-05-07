import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Inventory from './Pages/Inventory/Inventory';
import Manage from './Pages/Manage/Manage';
import AddItem from './Pages/AddItem/AddItem';
import MyItems from './Pages/MyItems/MyItems';
import Blogs from './Pages/Blogs/Blogs';
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
          <Route path='/manage-page' element={<Manage></Manage>}></Route>
          <Route path='/add-item' element={<AddItem></AddItem>}></Route>
          <Route path='/my-items' element={<MyItems></MyItems>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
