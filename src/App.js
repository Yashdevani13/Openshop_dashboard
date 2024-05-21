import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Layout from './componets/shared/Layout';
import Dashboard from './componets/Dashboard';
import Products from './componets/Products';

function App() {
  return (
    <>
      {/* <Router> */}
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='products' element={<Products />} />
          </Route>
          <Route path='login' element={<div> THis Is Login Page</div>}/>
        </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
