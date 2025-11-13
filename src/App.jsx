import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MemeGrid from "./components/MemeGrid";

export default function App() {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredMemes([]);
      return;
    }
    const filtered = memes.filter((meme) =>
      meme.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMemes(filtered);
  };

  return (
    <div className="min-h-screen bg-[#d8e5fe] flex flex-col items-center justify-center p-6">
      <h1
        className={`text-3xl font-bold mb-6 transition-all duration-500 ${searchQuery ? "scale-90 -translate-y-2" : "scale-100 translate-y-0"
          }`}
      >
        Meme Search
      </h1>

      <div className="w-2/3 transition-all duration-500 ease-in-out">
        <SearchBar onSearch={handleSearch} />
      </div>

      {filteredMemes.length > 0 ? (
        <div className="mt-10 transition-opacity duration-500 opacity-100 w-full">
          <MemeGrid memes={filteredMemes} />
        </div>
      ) : searchQuery ? (
        <p className="text-gray-600 mt-10 text-lg text-center">No memes found.</p>
      ) : null}

    </div>

  );
}
