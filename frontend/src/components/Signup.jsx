import React from 'react';
import {Link} from "react-router-dom";
import Login from './Login';
import { useForm } from "react-hook-form"



export default function signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit= (data) => console.log(data);


  return (
    <>
        <div className='flex h-screen items-center justify-center '>
        <div id="my_modal_3" className='border-[2px] shadow-md p-5 rounded-md w-[600px]' >
             <div>
                 <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                     <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                       <button className='bg-green-500 text-white p-2 mt-4 border rounded hover:bg-green-700 duration-200'>
                       ✕
                        </button>
                        </Link>
                
                          <h3 className="font-bold text-lg">SignUp</h3>

                        {/* Name */}
                                <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input 
                                type="text" 
                                placeholder='Enter your full name'
                                className='w-80 px-3 w-[500px] py-1 border rounded-md outline-none'
                                {...register("name", { required: true })} 
                            />
                                <br></br>
                                 {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        
                                 </div>

                 {/* Email */}
        <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input 
                type="email" 
                placeholder='Enter your email'
                className='w-80 px-3 w-[500px] py-1 border rounded-md outline-none'
                {...register("email", { required: true })} 
            />
             <br></br>
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        
        {/* Password */}
        <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input 
                type="password" 
                placeholder='Enter your password'
                className='w-80 px-3 w-[500px] py-1 border rounded-md outline-none'
                {...register("password", { required: true })} 
            />
             <br></br>
            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}


        </div>
        {/* Button */}
        <div >
        <button className='bg-green-500 text-white p-2 mt-4 border rounded hover:bg-green-700 duration-200'>
            Submit
        </button>
        
        </div>
         </form>
  </div>
</div>

        </div>

    </>
  )
}
