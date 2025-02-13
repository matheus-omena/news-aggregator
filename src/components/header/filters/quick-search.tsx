import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../../store/search-slice';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { RootState } from '../../../store/store';

export function QuickSearch() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const [query, setQuery] = useState<string>(searchQuery);

  const handleSearch = () => {
    dispatch(setSearchQuery(query));
  };

  return (
    <div className="hidden gap-2 md:flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Quick search..."
        className="focus-visible:ring-ring rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-900 focus-visible:ring-1 focus-visible:outline-none md:w-md lg:w-lg"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="group cursor-pointer rounded-full bg-slate-800 px-4 py-2 text-white transition-colors hover:bg-slate-700"
      >
        <MagnifyingGlass className="transition-all group-hover:scale-125" color="white" />
      </button>
    </div>
  );
}
