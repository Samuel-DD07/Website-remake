import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    newDisney: null,
    orginal: null,
    trending: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend
            state.newDisney = action.payload.newDisney
            state.orginal = action.payload.orginal
            state.trending = action.payload.trendingnd
        }
    }
})

export const { setMovies } = movieSlice.actions

export const selectRecommend = (state) => state.movie.recommend
export const selectnewDisney = (state) => state.movie.newDisney
export const selectOrginal = (state) => state.movie.orginal
export const selectTrending = (state) => state.movie.trending

export default movieSlice.reducer