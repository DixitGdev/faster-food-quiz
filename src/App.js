// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import AppBarWithHamburgerMenu from './components/ButtonAppBar';
import Business from './pages/Business';

const App = () => {
 return (
    <> 
    <AppBarWithHamburgerMenu/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/admin/business' element={<Business/>} />
       </Routes>
    </>
 );
};

export default App;