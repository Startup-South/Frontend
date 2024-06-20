"use client";
import React, { useState } from 'react';

const UserProfile: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <main className="flex flex-col items-center justify-center pl-32 pr-32"><br/><br/>
      <div className='container pt-20 lg:pt-0 color-white w-full max-w-md px-4'>
        <h1 className="text-4xl font-bold mb-8 pt-3 text-center">Login</h1>
        <div className="flex flex-col items-center w-full">
          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="w-full mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="w-full mb-4 text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
          </div>
          
          <div className="flex justify-center items-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              SIGN IN
            </button>
          </div>
          
          <div className="w-full mt-4 text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">Create account</a>
          </div>
        </div>
      </div>
      <br/><br/>
    </main>
  );
};

export default UserProfile;
