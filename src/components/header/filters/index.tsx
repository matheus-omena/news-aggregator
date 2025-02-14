import { useEffect, useState } from 'react';
import SidebarModal from '../../sidebar-modal';
import { Faders } from '@phosphor-icons/react';
import { Button } from '../../form/button';
import { Input } from '../../form/input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {
  resetSearch,
  setSearchCategory,
  setSearchPubDate,
  setSearchQuery,
  setSearchSources,
} from '../../../store/search-slice';
import { Checkbox } from '../../form/checkbox';
import { newsSources } from '../../../constants';

export function Filters() {
  const dispatch = useDispatch();
  const { query, category, pubDate, sources } = useSelector((state: RootState) => state.search);

  const [localQuery, setLocalQuery] = useState(query);
  const [localCategory, setLocalCategory] = useState(category);
  const [localPubDate, setLocalPubDate] = useState(pubDate);
  const [localSources, setLocalSources] = useState(sources);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setLocalQuery(query);
    setLocalCategory(category);
    setLocalPubDate(pubDate);
    setLocalSources(sources);
  }, [query, category, pubDate, sources]);

  const toggleSource = (source: string) => {
    setLocalSources((prevSources) =>
      prevSources.includes(source) ? prevSources.filter((s) => s !== source) : [...prevSources, source],
    );
  };

  const applyFilters = () => {
    dispatch(setSearchQuery(localQuery));
    dispatch(setSearchCategory(localCategory));
    dispatch(setSearchPubDate(localPubDate));
    dispatch(setSearchSources(localSources));
    setShowFilters(false);
  };

  const clearFilters = () => {
    const defaultDate = new Date().toISOString().split('T')[0];
    const defaultSources = [newsSources.newsApiOrg, newsSources.nyTimes, newsSources.theGuardian];

    dispatch(resetSearch());

    setLocalQuery('');
    setLocalCategory('');
    setLocalPubDate(defaultDate);
    setLocalSources(defaultSources);
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

              <div className="space-y-3">
                <Input
                  name="term"
                  label="Term"
                  placeholder="Search by term..."
                  value={localQuery}
                  onChange={(e) => setLocalQuery(e.target.value)}
                />
                <Input
                  name="pubDate"
                  type="date"
                  label="Publication date"
                  value={localPubDate}
                  onChange={(e) => setLocalPubDate(e.target.value)}
                />
                <Input
                  name="category"
                  label="Category"
                  placeholder="Search by category..."
                  value={localCategory}
                  onChange={(e) => setLocalCategory(e.target.value)}
                />

                <div>
                  <span className="mb-2 text-xs font-semibold">Sources</span>
                  <div className="flex gap-4">
                    <Checkbox
                      name="checkbox-newsApiOrg-source"
                      label="News API"
                      checked={localSources.includes(newsSources.newsApiOrg)}
                      onChange={() => toggleSource(newsSources.newsApiOrg)}
                    />
                    <Checkbox
                      name="checkbox-nyTimes-source"
                      label="New York Times"
                      checked={localSources.includes(newsSources.nyTimes)}
                      onChange={() => toggleSource(newsSources.nyTimes)}
                    />
                    <Checkbox
                      name="checkbox-theGuardian-source"
                      label="The Guardian"
                      checked={localSources.includes(newsSources.theGuardian)}
                      onChange={() => toggleSource(newsSources.theGuardian)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <Button text="Apply" onClick={applyFilters} />
              <Button text="Clear filters" isOutline onClick={clearFilters} />
            </div>
          </div>
        </SidebarModal>
      )}
    </>
  );
}
