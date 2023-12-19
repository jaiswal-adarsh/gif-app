"use client";
// import Image from "next/image";
// Login.js
import { useState } from 'react';
// import { useRouter } from 'next/router';
import { auth } from '../app/fb';
import { useRouter } from 'next/navigation';
// import Home from '../app/pages/home'

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push('/pages/home'); // Redirect to the home page or any other desired route
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {/* <Home/> */}
      <h2>Login</h2>
      <div className='frm_main border-2 border-indigo-600'>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;






// import { useState } from "react";
// import { searchGifs } from "../app/gify";

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [gifs, setGifs] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     try {
//       setLoading(true);
//       const data = await searchGifs(searchQuery);
//       setGifs(data);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="main">
//       <div className="searchbar p-10 mt-10">
//         <input
//           className="search border border-slate-100 place-content-center shadow-xl p-3"
//           placeholder="Article name or keywords..."
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button
//           className="btn border border-slate-400 mx-3 shadow-xl"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>
//       {loading && <p>Loading...</p>}

//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {gifs.map((gif) => (
//           <img
//             key={gif.id}
//             src={gif.images.fixed_height.url}
//             alt={gif.title}
//             style={{ margin: "5px", maxWidth: "150px", maxHeight: "150px" }}
//           />
//         ))}
//       </div>
//       {/* <h1>Hii This test Page</h1> */}
//     </div>
//   );
// }
