import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import FruitBenefits from "./components/FruitsBens"
// import Button from "./components/Getstarted"
import SignUpForm from "./components/SignUpForm"
import Fruits from "./components/fruits"
import Login from './components/Login';
// import PocketBase from "pocketbase"
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useState, useEffect } from "react";
const App = () => {
  // useEffect(() => {
  //   fetchCurrentUser();
  //   console.log("user",user);
  //   console.log("token",token);
    
  // }, []);

  // const pb = new PocketBase('http://127.0.0.1:8090');
  // const [user, setUser] = useState<any>(pb.authStore.model);
  // const [token, setToken] = useState<any>(pb.authStore.token);

  /*  */
  // const fetchCurrentUser = async () => {
  //   try {
  //    const records = await pb.collection('users').getFullList({
  //   sort: '-created',
  //   });
  //   /* get user id of the logged in user */
  //   const userId = pb.authStore.model
  //   console.log("user",userId);
  //   console.log("records",records);
    
    
  //   } catch (error) {
  //     console.log("error",error);
      
      
  //   }
  // };
  return (
    <Router>
      <div className="bg-slate-950 text-white min-h-screen sm:w-full max-w-md sm:max-w-full">
        {/* nav -home login signup */}
        <div className="flex justify-between items-center px-5 gap-x-6 py-4 top-0 inset-x-0 fixed z-10 bg-slate-950">
          <div className="flex justify-end items-end  md:text-xl  text-sm gap-x-5">
            <Link className='border-b-2 border-slate-300' to="/">Home</Link>
            <Link className='border-b-2 border-slate-300' to="/SignUpForm">SignUp</Link>
            <Link className='border-b-2 border-slate-300' to="/Login">Login</Link>
          </div>
        </div>
        <div className="flex justify-between space-x-3 px-5 items-center py-4 pt-16">
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
