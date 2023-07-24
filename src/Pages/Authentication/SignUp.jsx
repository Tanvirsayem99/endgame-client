import React, { useContext } from 'react';
import { AuthContext } from '../../Routes/AuthProvider';
import { Result } from 'postcss';

const SignUp = () => {

    const handleSubmit = event =>{

        const {handlesignUp}=useContext(AuthContext)

        event.preventdefault()

        const from = event.target;

        const name = from.name.value;
        console.log(name);
        const email = from.email.value;
        const password = from.password.value;
        const photoUrl = from.photoUrl.value;

        handlesignUp(email, password)
        .then(result =>{
            const signupUser = result.user;
            console.log(signupUser);
        })
        .catch(erro =>{
            console.log(erro.message);
        })



    }


    return (
        <div>
             <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full container mx-auto bg-gray-400 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              // Add onChange and value attributes if needed
            />
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
              Photo URL
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="photoUrl"
              name="photoUrl"
              placeholder="https://example.com/photo.jpg"
              // Add onChange and value attributes if needed
            />
          </div>
          {/* No need to include handleSubmit here */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default SignUp;