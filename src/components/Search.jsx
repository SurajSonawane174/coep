import React, { useState } from 'react';

const SearchBoxWithFilters = () => {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [subject, setSubject] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // For demonstration purposes, we'll just show the selected filters as the results
    const filteredResults = [
      `Search Query: ${query}`,
      `Year: ${year}`,
      `Branch: ${branch}`,
      `Subject: ${subject}`
    ];
    setResults(filteredResults);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg w-full max-w-lg mx-auto text-white">
      <div className="flex items-center mb-4 w-full">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-4 text-lg text-gray-200 bg-gray-800 border border-gray-600 rounded-lg w-2/3 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <button
          className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      
      <div className="flex gap-4 w-full mb-4">
        <select
          className="p-4 text-lg text-gray-200 bg-gray-800 border border-gray-600 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>

        <select
          className="p-4 text-lg text-gray-200 bg-gray-800 border border-gray-600 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          <option value="">Select Branch</option>
          <option value="CSE">Computer Science</option>
          <option value="IT">Information Technology</option>
          <option value="ECE">Electronics and Communication</option>
          <option value="ME">Mechanical Engineering</option>
        </select>

        <select
          className="p-4 text-lg text-gray-200 bg-gray-800 border border-gray-600 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="DSA">Data Structures and Algorithms</option>
          <option value="OOPD">Object-Oriented Programming Design</option>
          <option value="CO">Computer Organization</option>
          <option value="DBMS">Database Management Systems</option>
        </select>
      </div>

      {/* Display results below */}
      {results.length > 0 && (
        <div className="w-full bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Search Results:</h3>
          <ul className="mt-2">
            {results.map((result, index) => (
              <li key={index} className="text-gray-300">{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBoxWithFilters;
