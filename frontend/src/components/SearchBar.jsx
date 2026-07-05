import { useState } from "react";

function SearchBar({ onInvestigate }) {

  const [query, setQuery] = useState("");

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">

      <h2 className="text-xl font-semibold mb-4">
        Search Threat
      </h2>

      <input
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Enter IP or Domain"
        className="w-full rounded-lg bg-slate-800 p-3 border border-slate-700"
      />

      <button
        onClick={()=>onInvestigate(query)}
        className="mt-5 w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold"
      >
        Investigate
      </button>

    </div>
  );
}

export default SearchBar;