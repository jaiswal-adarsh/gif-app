"use client";
import Link from 'next/link';
import { useState } from 'react';
import { auth } from './fb';
import { useRouter } from 'next/navigation';


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push('/home'); // Redirect to the home page or any other desired route
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {/* <Home/> */}
      
      <div className='frm_main border-2 border-slate-100 p-10 shadow-2xl bg-gray-100'>
      <h2 className='login1'> User Login</h2>
      <form onSubmit={handleLogin}>
        <label >
          <h2 className='text-xl font-semibold'>Email:</h2>
          <input
            className='inptfrm1 border border-slate-400 p-3'
            type="email"
            placeholder='Username or Email'
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
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className='btnfrm '>Login</button>
        <p>
          <br></br>
          Don't have an account?{' '}
          <Link href="/dashboard">Dashboard</Link>
          {/* <a onClick={() => router.push('/')}>Register Now</a> */}
      </p>
      </form>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;