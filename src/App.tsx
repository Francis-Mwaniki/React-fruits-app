import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import FruitBenefits from "./components/FruitsBens"
// import Button from "./components/Getstarted"
import SignUpForm from "./components/SignUpForm"
import Fruits from "./components/fruits"
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div className="bg-slate-950 text-white min-h-screen sm:w-full max-w-md sm:max-w-full">
        <div className="flex justify-between space-x-3 px-5 items-center py-4">
          <div className="md:text-3xl text-lg font-extrabold">Best Food Rating Platform... </div>
          <div className="flex justify-end items-end underline md:text-base text-sm">
            <span>Developed by francis</span>
          </div>
        </div>
      
        {/* <FruitBenefits /> */}
        
        <Routes>
          <Route  path="/" element={<Fruits/>} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
