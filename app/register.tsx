'use client';
// Register.js
import { useState } from 'react';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { auth } from './fb';
import './register.css'

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      router.push('/'); // Redirect to the home page or any other desired route
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="rfrm_main border-2 border-slate-100 p-10 shadow-2xl bg-gray-100">
      <h2 className='reg1'>User Registeration</h2>
      <form onSubmit={handleRegister}>
        <label>
          <h2 className='text-xl font-semibold'>Email:</h2>
          <input
            className='inptfrm1 border border-slate-400 p-3'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <h2 className='text-xl font-semibold'>Password:</h2> 
          <input
            className='inptfrm2 border border-slate-400 p-3'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className='btnfrm '>Register</button>
      </form>
      <p>
          <br></br>
          Have an account?{' '}
          <br />
          <a href='/login' className='text-green-500' onClick={() => router.push('/login')}>Login Now</a>
      </p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Register;

