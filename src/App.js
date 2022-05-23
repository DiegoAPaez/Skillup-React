import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/listado' element={<Listado/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
