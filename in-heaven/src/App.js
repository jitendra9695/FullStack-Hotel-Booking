import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './Components/Home';
import UserLogin from './Login/UserLogin';
import UserRegistration from './Login/UserRegistration';
import Book from './Components/book';
import Admin from './Components/Admin'
import Bookings from './Components/Bookings';

function App() {
  return (     
     <div>
      <BrowserRouter>
         <Routes>
            <Route index element={<Home/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<UserLogin/>} />
            <Route path='/registration' element={<UserRegistration/>} />
            <Route path='/book' element={<Book/>} />
            <Route path='/admin' element={<Admin/>} />
            <Route path='/bookings' element={<Bookings/>} />

         </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
