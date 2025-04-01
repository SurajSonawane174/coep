import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { Search, Download, XCircle, Filter } from "lucide-react";
import { motion } from "framer-motion";
import { TextHoverEffect } from "./Texthover";
const data = [
  {
    id: 1,
    title: "Data Structures and Algorithms",
    short: "DSA",
    type: "Notes",
    year: "2023",
    branch: "CSE",
  },
  {
    id: 2,
    title: "Object-Oriented Programming",
    short: "OOP",
    type: "Books",
    year: "2022",
    branch: "IT",
  },
  {
    id: 3,
    title: "Computer Organization",
    short: "CO",
    type: "Papers",
    year: "2021",
    branch: "CSE",
  },
  {
    id: 4,
    title: "Theory of Computation",
    short: "TOC",
    type: "Notes",
    year: "2023",
    branch: "ECE",
  },
];

const fuse = new Fuse(data, { keys: ["title", "short"], threshold: 0.3 });

export default function AdvancedFilter() {
  const [search, setSearch] = useState("");
  const [filterYear, setFilterYear] = useState([]);
  const [filterBranch, setFilterBranch] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const motivationalPlaceholders = [
      "Search for 'Algorithms'!",
      "Find your favorite notes...",
      "Type a topic or branch!",
    ];
    setPlaceholder(
      motivationalPlaceholders[
        Math.floor(Math.random() * motivationalPlaceholders.length)
      ]
    );
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 1) {
      setLoading(true);
      const results = fuse.search(value).map((result) => result.item.title);
      setSuggestions(results);
      setLoading(false);
    } else {
      setSuggestions([]);
    }
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      setSearch(suggestions[selectedIndex]);
      setSuggestions([]);
    }
  };

  const clearSearch = () => {
    setSearch("");
    setSuggestions([]);
  };

  const handleQuickFilter = (quickFilter) => {
    setFilterYear(quickFilter.years || []);
    setFilterBranch(quickFilter.branches || []);
  };

  const handleCheckbox = (value, setFilter, filter) => {
    setFilter(
      filter.includes(value)
        ? filter.filter((v) => v !== value)
        : [...filter, value]
    );
  };

  const searchResults = search
    ? fuse.search(search).map((result) => result.item)
    : data;

  const filteredData = searchResults.filter(
    (item) =>
      (activeTab === "All" || item.type === activeTab) &&
      (filterYear.length === 0 || filterYear.includes(item.year)) &&
      (filterBranch.length === 0 || filterBranch.includes(item.branch))
  );

  return (
    <div className="flex flex-col items-center justify-center bg-black   p-6 sm:p-10 rounded-2xl overflow-x-hidden">
        <TextHoverEffect text="LIBRARY" />
      <div className="flex flex-col md:flex-row gap-4 p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen transition-all  mx-auto relative mt-16">
        {/* Main Section */}
        <div className="flex-1">
          <div className="relative mb-6">
            <div className="flex items-center bg-gray-900 rounded px-3 py-2 shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <input
                className="w-full p-2 bg-transparent text-white rounded border-none focus:outline-none"
                placeholder={placeholder}
                value={search}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
              />
              {search && (
                <XCircle
                  className="w-6 h-6 text-gray-400 ml-2 hover:text-red-500 cursor-pointer transition-colors duration-200"
                  onClick={clearSearch}
                />
              )}
              <Search className="w-6 h-6 text-gray-400 ml-2 hover:scale-125 transition-transform duration-200 cursor-pointer" />
            </div>
            {loading && (
              <div className="absolute top-10 left-0 w-full text-center">
                Loading...
              </div>
            )}
            {suggestions.length > 0 && (
              <ul className="absolute bg-gray-800 text-white mt-2 w-full shadow-md rounded animate-fadeIn">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className={`px-3 py-2 hover:bg-gray-700 cursor-pointer ${
                      selectedIndex === index ? "bg-gray-700" : ""
                    }`}
                    onMouseDown={() => setSearch(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex space-x-4 mb-6">
            {["All", "Books", "Papers", "Notes"].map((tab) => (
              <motion.button
                key={tab}
                className={`px-5 py-2 rounded text-sm font-semibold ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600"
                } transition-colors duration-200`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {filteredData.length > 0 ? (
            filteredData.map((file) => (
              <motion.div
                key={file.id}
                className="p-4 bg-gray-800 rounded mb-3 flex justify-between items-center shadow hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-md">
                  {file.title} ({file.year} - {file.branch})
                </span>
                <Download className="w-6 h-6 text-gray-400 cursor-pointer hover:scale-110 transition-transform duration-200" />
              </motion.div>
            ))
          ) : (
            <div className="text-center text-gray-400 mt-10">
              <Filter className="w-10 h-10 mx-auto text-gray-500" />
              <p>No matching results. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>

        {/* Filters Section */}
        <div className="w-full md:w-1/4 border-l border-gray-700 p-6 bg-gray-900 rounded-lg">
          <h3 className="font-bold text-lg mb-4">Quick Filters</h3>
          <motion.button
            className="w-full mb-4 bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            onClick={() =>
              handleQuickFilter({ years: ["2023"], branches: ["CSE"] })
            }
            whileHover={{ scale: 1.05 }}
          >
            2023 CSE Resources
          </motion.button>
          <h3 className="font-bold text-lg mb-4">Filter by Category</h3>
          <h4 className="font-bold mb-3">Year</h4>
          {["2021", "2022", "2023"].map((year) => (
            <label key={year} className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                checked={filterYear.includes(year)}
                onChange={() => handleCheckbox(year, setFilterYear, filterYear)}
                className="cursor-pointer"
              />
              <span>{year}</span>
            </label>
          ))}
          <h4 className="font-bold mt-6 mb-3">Branch</h4>
          {["CSE", "IT", "ECE"].map((branch) => (
            <label key={branch} className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                checked={filterBranch.includes(branch)}
                onChange={() =>
                  handleCheckbox(branch, setFilterBranch, filterBranch)
                }
                className="cursor-pointer"
              />
              <span>{branch}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
