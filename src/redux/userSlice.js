import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import http from "../services/http";
import {toast} from "react-toastify";

const initialState = {
    user: null,
    token: null,
    error: null,
    status: 'init'
};

export const fetchToken = createAsyncThunk(
    'user/login',
    async ({username, password}, thunkAPI) => {
        const {data} = await http.post('/auth/login', {
            username,
            password
        });

        if(data.status === 'Error') {
            toast.error(data.msg);
            return thunkAPI.rejectWithValue(data);
        }

        toast.success('Welcome, login success!');
        localStorage.setItem('token', data.token);
        return data;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, {payload}) {
            state.token = payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchToken.pending, (state, {payload}) => {
            state.status = 'loading';
        });
        builder.addCase(fetchToken.fulfilled, (state, {payload}) => {
            state.status = 'loaded';
            state.token = payload.token;
            state.error = null;
        });
        builder.addCase(fetchToken.rejected, (state, {payload}) => {
            state.status = 'error';
            state.error = payload;
        });
    }
});

export const {setToken} = userSlice.actions;

export default userSlice.reducer;