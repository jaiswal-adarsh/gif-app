"use client";

import Link from 'next/link';
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { auth } from './fb';
// // import { useRouter } from 'next/navigation';
// import Home from '../pages/home'
// import Login from '../pages/login'
import Register from './register/page'

import Login from './login/page'

const Pages = () => {

  return (
    <div>
      <Login/>
      {/* <Home/> */}
      {/* <Register/> */}
      <Link href="/home">Dashboard</Link>
      <h1>hii</h1>
    </div>
  );
};

export default Pages;






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
