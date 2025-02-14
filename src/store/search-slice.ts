import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { newsSources } from '../constants';
import moment from 'moment';

interface SearchState {
  query: string;
  pubDate: string;
  category: string;
  sources: string[];
}

const initialState: SearchState = {
  query: '',
  pubDate: moment().format('YYYY-MM-DD'),
  category: '',
  sources: [newsSources.newsApiOrg, newsSources.nyTimes, newsSources.theGuardian],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSearchPubDate: (state, action: PayloadAction<string>) => {
      state.pubDate = action.payload;
    },
    setSearchCategory: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSearchSources: (state, action: PayloadAction<string[]>) => {
      state.sources = action.payload;
    },
  },
});

export const { setSearchQuery, setSearchPubDate, setSearchCategory, setSearchSources } = searchSlice.actions;
export default searchSlice.reducer;
