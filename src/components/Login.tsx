import {useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        confirmPassword:""
    })
    const handleChange=(e: { target: { name: any; value: any } })=>{
        setFormData({...formData, [e.target.name]:e.target.value })
    }
    const handleSubmit=(e: { preventDefault: () => void; })=>{
        e.preventDefault()
        console.log(formData)
        
    }

  return (
    <>
    <div className="max-w-md px-3 mx-auto container ">
      <h2 className="text-2xl font-bold mb-4">Sign In choo!</h2>
      <form onSubmit={handleSubmit}>
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-1 ring-white"
        >
          Sign in to your account
        </button>
        <div className="py-2  flex flex-row gap-x-3">
       <span className="">or</span>
        <Link to="/SignUpForm">
          <p className=" text-indigo-500 ">
            Don't have an account? Sign up
          </p>
        </Link>
       </div>
      </form>
    </div>
  <div className="w-40 pl-20 md:my-2 my-2">
  <Link  to="/"><button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-1 ring-white ">Go back</button></Link>
  </div>
    </>
  )
}

export default Login