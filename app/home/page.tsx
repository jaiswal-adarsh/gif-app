"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { searchGifs } from "../gify";
import "../home/home.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await searchGifs(searchQuery);
      setGifs(data);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (gif) => {
    const isFavorite = favorites.some((favorite) => favorite.id === gif.id);

    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.id !== gif.id));
    } else {
      setFavorites([...favorites, gif]);
    }
  };
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="">
      {/* <div className="container">
        <div className="row align-items-start">
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
        </div>
      </div> */}

      <h1 className=" mainfrm1 font-serif font-black text-5xl my-10 text-center">
        My Giphy Dashboard
      </h1>
      <div className="searchbar p-10 mt-10">
        <input
          className="search border border-slate-100 place-content-center shadow-xl p-3"
          placeholder="Article name or keywords..."
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn border border-slate-400 mx-3 shadow-xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-4 gap-4">

      <div className="disp col-span-3" style={{ display: "flex", flexWrap: "wrap" }}>
      
      
        {gifs.map((gif) => (
          <div key={gif.id} style={{ margin: "5px", position: "relative" }}>
            <img
              src={gif.images.fixed_height.url}
              alt={gif.title}
              style={{ maxWidth: "150px", maxHeight: "150px" }}
            />
            <button
              onClick={() => toggleFavorite(gif)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: favorites.some((favorite) => favorite.id === gif.id)
                  ? "yellow"
                  : "white",
              }}
            >
              ❤️
            </button>
          </div>
        ))}
      </div>

      <div className="favbar">
        <h2 className="font-serif font-black text-2xl text-center">Favorites</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {favorites.map((favorite) => (
            <img
              key={favorite.id}
              src={favorite.images.fixed_height.url}
              alt={favorite.title}
              style={{ margin: "5px", maxWidth: "150px", maxHeight: "150px" }}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

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
// <h1 className="font-serif font-black text-5xl my-10 text-center">My Giphy Dashboard</h1>
// <div className="searchbar p-10 mt-10">
//   <input
//     className="search border border-slate-100 place-content-center shadow-xl p-3"
//     placeholder="Article name or keywords..."
//     type="text"
//     value={searchQuery}
//     onChange={(e) => setSearchQuery(e.target.value)}
//   />
//   <button
//     className="btn border border-slate-400 mx-3 shadow-xl"
//     onClick={handleSearch}
//   >
//     Search
//   </button>
//       </div>
//       {/* {loading && <p>Loading...</p>} */}
//       {loading && <div className="d-flex justify-content-center">
//   <div className="spinner-border" role="status">
//     <span className="visually-hidden">Loading...</span>
//   </div>
// </div>}

//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {gifs.map((gif) => (
//           <img
//             key={gif.id}
//             src={gif.images.fixed_height.url}
//             alt={gif.title}
//             style={{ margin: "5px", maxWidth: "300px", maxHeight: "300px" }}
//           />
//         ))}
//       </div>
//       {/* <h1>Hii This test Page</h1> */}
//     </div>
//   );
// }
