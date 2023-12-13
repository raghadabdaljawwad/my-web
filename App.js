
import{Routes,Route}from 'react-router-dom';
import './App.css';
import Sidebar from'./component/Sidebar';
import navbar from'./component/Navbar';
import {BrowserRouter} from "react-router-dom";
import Home from'./pages/Home';
import product from './pages/product';

function App(){


    <div className="App">
        <h1>helloworld</h1>
        <Navbar/>
        <div className="row">
            <div className='col-2 sidebar'>
<Sidebar/>


            </div>
            <div className='col-10'>
<Routes>
<Route path="/"element={<home/>}/>
<Route path="Prodect" element={<About/>}/>
<Route path="product/add"element={<addproduct/>}/>
</Routes>



            </div>
            </div>
        </div>
}