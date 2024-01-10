import Navbar from "../../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form"
import { FaGooglePlusG } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
          <div>
         <Navbar></Navbar>
            <div className="px-[2%]">
                <div className="py-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div>
                            <label htmlFor="" className="text-sm">Name</label>
                            <input {...register("name")} className='rounded-md ring-1 ring-[#e9e9e9] focus:ring-1 focus:ring-[#0791be]  focus:border-none focus:outline-none py-2 px-4 w-full' />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="" className="text-sm">Email</label>
                            <input {...register("email")} className='rounded-md ring-1 ring-[#e9e9e9] focus:ring-1 focus:ring-[#0791be]  focus:border-none focus:outline-none py-2 px-4 w-full' />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="" className="text-sm">Phone</label>
                            <input {...register("phone")} className='rounded-md ring-1 ring-[#e9e9e9] focus:ring-1 focus:ring-[#0791be]  focus:border-none focus:outline-none py-2 px-4 w-full' />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="" className="text-sm">Password</label>
                            <input {...register("password")} className='rounded-md ring-1 ring-[#e9e9e9] focus:ring-1 focus:ring-[#0791be]  focus:border-none focus:outline-none py-2 px-4 w-full' />
                        </div>
                        <Link to='/home' type="submit" className='mt-7 text-sm bg-[#dc3545]   rounded-md text-center w-full text-white py-3 hover:bg-[#c82333] duration-500'> CREATE AN ACCOUNT   </Link>
                    </form>
                    <p className="text-sm text-center pt-4">By signing up you agree to our Privacy Policy and Terms.</p>
                    <div className="w-1/4 mx-auto ">  <div className="divider">OR</div></div>
                     <div>
                        <button className=' text-sm bg-transparent rounded-md text-center w-full text-[#0791be] py-3 mt-5 hover:bg-[#e2e6ea] duration-500 uppercase flex justify-center items-center border border-[#0791be]'> <span className="pr-2"><FaGooglePlusG /></span> login with google </button>
                        <button className=' text-sm bg-transparent rounded-md text-center w-full text-[#dc3545] py-3 mt-5 hover:bg-[#e2e6ea] duration-500 uppercase flex justify-center items-center border border-[#dc3545]'> <span className="pr-2"><FaFacebookF /></span> login with facebook </button>
                     </div>
                     <p className="text-center pt-3 text-sm">Already have an account? <Link  to='/login' className="text-[#0791be]">Sign In</Link></p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;