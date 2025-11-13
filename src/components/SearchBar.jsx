import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = async () => {
    setLoading(true);
    await onSearch(query);
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="relative w-full m-5 flex">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search memes..."
        className="flex-1 p-3 pl-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 bg-white"
      />
      <button
        onClick={handleSearchClick}
        disabled={loading}
        className={`ml-2 p-3 rounded-xl bg-[#171718] text-white flex items-center justify-center ${loading ? "cursor-not-allowed opacity-70" : ""
          }`}
      >
        {loading ? "Searching..." : <Search size={20} className="mr-1" />}
      </button>
    </div>
  );
}
