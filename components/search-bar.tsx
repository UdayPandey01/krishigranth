import { useState } from "react";
import { GrSearch } from "react-icons/gr";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState("");

  const searchCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSearch}className="max-w-md mx-auto mt-10 ">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <GrSearch/>
        </div>
        <input
          type="search"
          onChange={searchCity}
          className="w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50"
          placeholder="Enter the city"
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};
