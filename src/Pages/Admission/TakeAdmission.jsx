import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TakeAdmission = () => {

    const data = useLoaderData()
    console.log(data);

    const handleSubmit = event =>{

        

    }
    return (
        <div>
              <form onSubmit={handleSubmit} className="container mx-auto  p-4 border rounded-lg shadow-lg mt-20">
      <div className="mb-4">
        <label htmlFor="candidateName" className="block font-bold mb-1">
          Candidate Name:
        </label>
        <input
          type="text"
          id="candidateName"
          name="candidateName"
         
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block font-bold mb-1">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
        
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="candidateEmail" className="block font-bold mb-1">
          Candidate Email:
        </label>
        <input
          type="email"
          id="candidateEmail"
          name="candidateEmail"
         
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="candidatePhoneNumber" className="block font-bold mb-1">
          Candidate Phone number:
        </label>
        <input
          type="tel"
          id="candidatePhoneNumber"
          name="candidatePhoneNumber"
         
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block font-bold mb-1">
          Address:
        </label>
        <textarea
          id="address"
          name="address"
          
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block font-bold mb-1">
          Date of Birth:
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
         
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block font-bold mb-1">
          Image:
        </label>
        <input
          type="text"
          id="image"
          name="image"
        
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white font-bold rounded">
        Submit
      </button>
    </form>
        </div>
    );
};

export default TakeAdmission;