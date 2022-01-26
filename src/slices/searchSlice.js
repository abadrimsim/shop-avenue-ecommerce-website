import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	query: '',
};

export const searchSlice = createSlice({
	name: 'query',
	initialState,
	reducers: {
		searchQuery: (state, action) => {
			console.log(state);
			// state.query = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { searchQuery } = searchSlice.actions;

export default searchSlice.reducer;
