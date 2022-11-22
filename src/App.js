import './App.css';
import Header from './components/script/Header';
import Home from './components/script/Home';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Cart from './components/script/Cart'
import Details from './components/script/Details'
import SecondHeader from './components/script/SecondHeader';



function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <SecondHeader/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/details/:id' element = {<Details />} />
          <Route path='/cart' element = {<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
