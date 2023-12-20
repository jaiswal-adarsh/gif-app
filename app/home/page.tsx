// Importing necessary modules and styles
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { searchGifs } from "../gify";
import "../home/home.css";

// Functional component for the Home page
export default function Home() {
  // State variables for managing search, gifs, favorites, and loading state
  const [searchQuery, setSearchQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  // Async function to handle GIF search
  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await searchGifs(searchQuery);
      setGifs(data);
    } finally {
      setLoading(false);
    }
  };

  // Function to toggle favorites
  const toggleFavorite = (gif) => {
    const isFavorite = favorites.some((favorite) => favorite.id === gif.id);

    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.id !== gif.id));
    } else {
      setFavorites([...favorites, gif]);
    }
  };

  // useEffect to load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // useEffect to update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Render the Home component
  return (
    <div className="">
      {/* Header */}
      <h1 className="mainfrm1 font-serif font-black text-5xl my-10 text-center">
        My Giphy Dashboard
      </h1>

      {/* Search bar */}
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

      {/* Loading indicator */}
      {loading && <p>Loading...</p>}

      {/* Grid layout for displaying searched GIFs and favorites */}
      <div className="grid grid-cols-4 gap-4">
        {/* Display searched GIFs */}
        <div
          className="disp col-span-3 border border-slate-100 place-content-center shadow-xl bg-blue-50"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
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
                  background: favorites.some(
                    (favorite) => favorite.id === gif.id
                  )
                    ? "yellow"
                    : "white",
                }}
              >
                ❤️
              </button>
            </div>
          ))}
        </div>

        {/* Display favorite GIFs */}
        <div className="favbar border border-slate-100 place-content-center shadow-xl bg-green-100">
          <h2 className="font-serif font-black text-2xl text-center mx-10">
            Favorites❤️
          </h2>
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
