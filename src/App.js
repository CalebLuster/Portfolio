import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import './index.css'

function App() {
  return (
 <>
 <Routes>
  <Route path="/" element={<Layout />}/> 
  </Routes></>
  );
}

export default App;
