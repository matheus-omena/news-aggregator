import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { newsSources } from '../constants';

interface SearchState {
  query: string;
  pubDate: string;
  category: string;
  sources: string[];
}

const today = new Date().toISOString().split('T')[0];

const initialState: SearchState = {
  query: '',
  pubDate: today,
  category: '',
  sources: [newsSources.newsApiOrg, newsSources.nyTimes, newsSources.theGuardian],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload.trim();
    },
    setSearchPubDate: (state, action: PayloadAction<string>) => {
      state.pubDate = action.payload;
    },
    setSearchCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSearchSources: (state, action: PayloadAction<string[]>) => {
      state.sources = action.payload.length > 0 ? action.payload : initialState.sources;
    },
    resetSearch: () => initialState,
  },
});

export const { setSearchQuery, setSearchPubDate, setSearchCategory, setSearchSources, resetSearch } =
  searchSlice.actions;

export default searchSlice.reducer;
