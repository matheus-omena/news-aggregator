import { useState } from 'react';
import SidebarModal from '../../sidebar-modal';
import { Faders } from '@phosphor-icons/react';
import { Button } from '../../form/button';
import { Input } from '../../form/input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setSearchQuery } from '../../../store/search-slice';

export function Filters() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const [query, setQuery] = useState<string>(searchQuery);

  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleFilters = () => {
    dispatch(setSearchQuery(query));

    setShowFilters(false);
  };

  const clearFilters = () => {
    dispatch(setSearchQuery(''));
    setQuery('');

    setShowFilters(false);
  };

  return (
    <>
      <button onClick={() => setShowFilters(true)} className="flex cursor-pointer flex-col items-center justify-center">
        <Faders size={20} className="transition-all hover:scale-125" />
        <span className="text-[10px] font-medium">Filters</span>
      </button>

      {showFilters && (
        <SidebarModal onClose={() => setShowFilters(false)}>
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="mb-4">
                <h2 className="mb-4 text-xl font-bold">Search filters</h2>
                <p className="text-sm">Do a more specific search according to your interest!</p>
              </div>

              <div>
                <Input
                  name="therm"
                  label="Therm"
                  placeholder="Search by therm..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <Button text="Apply" onClick={handleFilters} />
              <Button text="Clear filters" isOutline onClick={clearFilters} />
            </div>
          </div>
        </SidebarModal>
      )}
    </>
  );
}
