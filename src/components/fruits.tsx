import { Link } from "react-router-dom"
import fruit from "../assets/fruits.jpg"
import Button from "./Getstarted"
import FruitBenefits from "./FruitsBens"
const Fruits = () => {
  return (
    <>
    <div className=" flex justify-center mx-auto gap-x-5 space-x-2 items-center flex-col md:flex-row gap-y-3">
    {/* fruits image and descrition */}
    <img src={fruit} alt="" className=" object-cover w-full" />
    {/* description */}
    <div className=" md:text-3xl text-lg px-2 text-gray-50">
        The Best fruits in town. You just need to give it a try!
    </div>
</div>
<FruitBenefits/>
<Link to="/SignUpForm"><Button/></Link>
    </>
  )
}

export default Fruits