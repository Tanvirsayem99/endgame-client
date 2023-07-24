import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Routes/AuthProvider';

const SignIn = () => {
    const {handlelogIn}=useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = event =>{
        event.preventDefault()

        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        handlelogIn(email, password)
        .then(result =>{
            const signupUser = result.user;
            console.log(signupUser);
            navigate('/')
        })
        .catch(erro =>{
            console.log(erro.message);
        })
    }
    return (
        <div>
        <div className="flex justify-center items-center h-screen bg-gray-100">
 <div className="w-full container mx-auto bg-gray-400 rounded-lg shadow p-6">
   <h2 className="text-2xl font-bold mb-4">LOGIN</h2>
   <form onSubmit={handleSubmit}>
     <div className="mb-4">
      
       
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
         Email
       </label>
       <input
         className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
         type="email"
         id="email"
         name="email"
         placeholder="john.doe@example.com"
         // Add onChange and value attributes if needed
       />
     </div>
     <div className="mb-4">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
         Password
       </label>
       <input
         className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
         type="password"
         id="password"
         name="password"
         // Add onChange and value attributes if needed
       />
     </div>
     <p className='text-sky-600'>don't have an account? please <Link to="/signup">Sign Up</Link></p>
     {/* No need to include handleSubmit here */}
     <button
       className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
       type="submit"
     >
       LOGIN
     </button>
   </form>
 </div>
</div>
   </div>
    );
};

export default SignIn;