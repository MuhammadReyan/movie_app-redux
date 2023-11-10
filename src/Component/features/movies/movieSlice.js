import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import movieApi from '../../../common/apis/MovieApi'
import { APIKey } from '../../../common/apis/MovieApiKey'



export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {

  
    const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=movie`
    )
        .catch((err) => console.log(err + " Api Error"))
    return response.data

})


export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {

 
    const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=series`
    )
        .catch((err) => console.log(err + " Api Error"))
    return response.data

})


export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {


    const response = await movieApi.get(
        `?apiKey=${APIKey}&i=${id}&Plot=full`
    )
        .catch((err) => console.log(err + " Api Error"))
    return response.data

})


const initialState = {
    movies: {},
    shows: {},
    selectedMovieShow: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload
        },
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending Here")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fulfilled Here");
            return { ...state, movies: { ...payload } };
         },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected")
        },

        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fulfilled Here")
            return { ...state, shows: payload }
        },


        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fulfilled Here")
            return { ...state, selectedMovieShow: payload }
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieShow = (state) => state.movies.selectedMovieShow
export default movieSlice.reducer