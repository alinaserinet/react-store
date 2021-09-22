import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import http from "../services/http";
import {toast} from "react-toastify";

const initialState = {
    user: null,
    token: null,
    error: null
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
        return data;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchToken.fulfilled, (state, {payload}) => {
            state.token = payload.token;
            state.error = null;
        });
        builder.addCase(fetchToken.rejected, (state, {payload}) => {
            state.error = payload;
        });
    }
});

export const {} = userSlice.actions;

export default userSlice.reducer;