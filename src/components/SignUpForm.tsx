import { useState } from "react";
import { Link } from "react-router-dom";
import PocketBase from "pocketbase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUpForm =  () => {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passConfirm: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
try {
  const records=await pb.collection('users').create({
    Username: formData.firstName,
    email: formData.email,
    password: formData.password,
    passwordConfirm: formData.passConfirm,
    name: formData.firstName,
    emailVisibility: true,
  });
  await pb.collection('auth').requestVerification(records.email);
  console.log("records",records);
  // Perform form submission logic here
  toast.success('Account created successfully!');
  formData.firstName = "";
  formData.lastName = "";
  formData.email = "";
  formData.password = "";
  formData.passConfirm = "";

} catch (error: any) {
  console.log("error",error);
  toast.error(error.message);
  // Handle error here
  
}
  };

  return (
    <>
    <div className="max-w-md px-3 mx-auto container ">
      <h2 className="text-2xl font-bold mb-4">Sign Up Choo!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="passConfirm" className="block mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="passConfirm"
            name="passConfirm"
            value={formData.passConfirm}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-1 ring-white"
        >
          Sign Up
        </button>
       <div className="py-2  flex flex-row gap-x-3">
       <span className="">or</span>
        <Link to="/Login">
          <p className=" text-indigo-500 ">
            Already have an account? Login
          </p>
        </Link>
       </div>
      </form>
    </div>
  <div className="w-40 pl-20 md:my-2 my-2">
  <Link  to="/"><button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-1 ring-white ">Go back</button></Link>
  </div>
  <ToastContainer />
    </>
  );
};

export default SignUpForm;
