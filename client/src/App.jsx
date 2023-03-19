import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Transaction from './routes/transaction';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact index={true} element={<Home/>}/>
        <Route exact path='transaction' element={<Transaction/>}/>
      </Routes>
    </Router>
  )
}

export default App
