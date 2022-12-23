 import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Front from './Components/Front';
import Middle from './Components/Middle';
import FetchProduct from './Components/FetchProduct';
import Shop from './Components/Shop';
import Error from './Components/Error';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Timer from './Components/Timer';
import BestSeller from './Components/BestSeller';
import BestSellerP from './Components/BestSellerP';
import Blog from './Components/Blog';
import Subcribe from './Components/Subcribe';

import Productshow from './Components/Productshow';
import About from './Components/About';
import Contact from './Components/Contact';
import Registatiion from './Components/Registation';
import Slide from './Components/Slide';


 function App() {
  return (  
    <div className="App">

 <Router>
        <Navbar/>
        <Routes>
      <Route path='/' element={<Front/>}/>
     <Route path='shop' element={<Shop/>}/>
     <Route path='shopkaro' element={<Productshow/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='*' element={<Error/>} />
    
        </Routes>        
        </Router>
      <Middle/>
      <FetchProduct/>
      <Timer/>
      <BestSeller/>
     <BestSellerP/>
     <Blog/>
     <Subcribe/> 

{/* <Registatiion/>  */}

{/* <Slide/> */}

      </div> 
  );
}

export default App;
