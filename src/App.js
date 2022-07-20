import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layoute';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register'
import Search from './views/Search/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
