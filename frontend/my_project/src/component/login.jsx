import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (<>  
    <div>
    <dialog id="my_modal" className="modal ">
      <div className="modal-box max-w-2/3 md:max-w-1/3 dark:bg-slate-900 dark:text-white">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>{document.getElementById('my_modal')?.close()}}>✕</button>
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          {/* if there is a button in form, it will close the modal */}
       
        <h3 className="font-bold text-lg text-pink-500 border-b-2 text-center p-2">Login :)</h3>
        
        <div className='grid grid-cols-1 gap-1 pt-2.5'>
        <label className="block font-bold">Username</label>
            <input {...register("Email", { required: true })
            }
              type="email" 
              placeholder="Enter Your Username..." 
              className="w-full  text-sm p-1  border-gray-300 rounded-md  focus:outline-none dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.Email && <span className='text-red-600 text-xs '>This field is required*</span>}
          </div>


          <div className="mt-4">
            <label className="block font-bold">Password</label>
            <input {...register("Password", { required: true })}
              type="password" 
              placeholder="Create a Password..." 
              className="w-full p-1 text-sm  border-gray-300 rounded-md  focus:outline-none dark:bg-gray-700 dark:border-gray-600"
            />
              {errors.Password && <span className='text-red-600 text-xs '>This field is required*</span>}
<button type='submit' className=' btn btn-secondary font-extralight p-3 mt-5  w-full'  >Login</button>
</div>
      <div className=' '>
        <p className="p-5 text-sm text-center">Press ESC key or click on ✕ button to close</p>
   
        <p className=" text-sm text-center">Don't Have a Account ?? <Link to={'/SignUp'} className='text-blue-900' >SignUp</Link> </p> 

        </div> </form>
      </div>
      
    </dialog></div>
    </>
  )
}
