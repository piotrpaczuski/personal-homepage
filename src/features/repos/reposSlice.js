import { createSlice } from "@reduxjs/toolkit";

export const reposSlice = createSlice({
  name: "repos",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, { payload: name }) => {
      state.data = name;
    },
    fetchGithubRepos: () => {},
  },
});

export const { setData, fetchGithubRepos } = reposSlice.actions;

export const selectData = ({ repos }) => repos.data;

export default reposSlice.reducer;
