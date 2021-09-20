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
    async ({username, password}) => {
        try {
            const {data} = await http.post('/auth/login', {
                username,
                password
            });
            if(data.status === 'Error') throw data;
            return data;
        }
        catch (err) {
            throw {
                message: err.msg,
            };
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchToken.fulfilled, (state, {payload}) => {
            toast.success('Welcome, login success!');
            state.token = payload.token;
            state.error = null;
        });
        builder.addCase(fetchToken.rejected, (state, {error}) => {
            state.error = error;
            toast.error(error.message);
        });
    }
});

export const {} = userSlice.actions;

export default userSlice.reducer;