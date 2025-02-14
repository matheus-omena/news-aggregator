import { useState } from 'react';
import SidebarModal from '../../sidebar-modal';
import { Faders } from '@phosphor-icons/react';
import { Button } from '../../form/button';
import { Input } from '../../form/input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setSearchCategory, setSearchPubDate, setSearchQuery, setSearchSources } from '../../../store/search-slice';
import { Checkbox } from '../../form/checkbox';
import { newsSources } from '../../../constants';
import moment from 'moment';

export function Filters() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const searchCategory = useSelector((state: RootState) => state.search.category);
  const searchPubDate = useSelector((state: RootState) => state.search.pubDate);
  const selectedSources = useSelector((state: RootState) => state.search.sources);

  const [query, setQuery] = useState<string>(searchQuery);
  const [category, setCategory] = useState(searchCategory);
  const [pubDate, setPubDate] = useState(searchPubDate);
  const [sources, setSources] = useState<string[]>(selectedSources);

  const [showFilters, setShowFilters] = useState<boolean>(false);

  const toggleSource = (source: string) => {
    const updatedSources = sources.includes(source) ? sources.filter((s) => s !== source) : [...sources, source];

    setSources(updatedSources);
  };

  const handleFilters = () => {
    dispatch(setSearchQuery(query));
    dispatch(setSearchCategory(category));
    dispatch(setSearchPubDate(pubDate));
    dispatch(setSearchSources(sources));

    setShowFilters(false);
  };

  const clearFilters = () => {
    dispatch(setSearchQuery(''));
    dispatch(setSearchCategory(''));
    dispatch(setSearchPubDate(moment().format('YYYY-MM-DD')));
    dispatch(setSearchSources([newsSources.newsApiOrg, newsSources.nyTimes, newsSources.theGuardian]));

    setQuery('');
    setCategory('');
    setPubDate(moment().format('YYYY-MM-DD'));
    setSources([newsSources.newsApiOrg, newsSources.nyTimes, newsSources.theGuardian]);

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
                  name="therm"
                  label="Therm"
                  placeholder="Search by therm..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Input
                  name="pubDate"
                  type="date"
                  label="Publication date"
                  value={pubDate}
                  onChange={(e) => setPubDate(e.target.value)}
                />
                <Input
                  name="category"
                  label="Category"
                  placeholder="Search by category..."
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />

                <div>
                  <span className="mb-2 text-xs font-semibold">Sources</span>
                  <div className="flex gap-4">
                    <Checkbox
                      name="checkbox-newsApiOrg-source"
                      label="News API"
                      checked={sources.includes(newsSources.newsApiOrg)}
                      onChange={() => toggleSource(newsSources.newsApiOrg)}
                    />
                    <Checkbox
                      name="checkbox-nyTimes-source"
                      label="New York Times"
                      checked={sources.includes(newsSources.nyTimes)}
                      onChange={() => toggleSource(newsSources.nyTimes)}
                    />
                    <Checkbox
                      name="checkbox-theGuardian-source"
                      label="The Guardian"
                      checked={sources.includes(newsSources.theGuardian)}
                      onChange={() => toggleSource(newsSources.theGuardian)}
                    />
                  </div>
                </div>
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
