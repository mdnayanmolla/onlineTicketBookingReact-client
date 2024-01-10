import { Link } from 'react-router-dom';
import regisImg from '../../assets/registration.svg'

const Registration = () => {
    return (
        <div className="bg-white h-screen flex justify-center relative">
           <div>
              <div className='mt-10 flex justify-center '>  
                 <img src={regisImg} alt="" className=' h-56 w-56' />      
              </div>
              <div className='text-center space-y-2'>
                <h3 className='text-[#2c3034] font-semibold text-2xl'>Start by creating an account.</h3>
                <p className='text-[#757f87]'>Im an early bird and Im night owl so Im</p>
                <p className='text-[#757f87]'>wise and I have worms.</p>
              </div>
           </div>
           <div className='px-[2%] fixed bottom-4 left-0 w-full z-40'>
                <Link to='/signup'> <button className='bg-[#dc3545]  text-sm rounded-md text-center w-full text-white py-3 hover:bg-[#c82333] duration-500'> CREATE AN ACCOUNT   </button></Link>
                <Link to='/login'> <button className='bg-[#f5f3fe]  text-sm rounded-md text-center w-full text-[#63656c] py-3 mt-5 hover:bg-[#e2e6ea] duration-500'>Sign Up  </button></Link>
            </div>
        </div>
    );
};

export default Registration;