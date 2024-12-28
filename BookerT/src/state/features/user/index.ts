import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  name: string;
  lastName:string;
 
}

const initialState: IUserState = {
  name: "",
  lastName: "",
};

export const user_load_user_thunk = createAsyncThunk(
  "USER_STATE/LOAD_USER",
  async (_data: any = null, thunkApi) => {
    const reaponse:IUserState ={name:"Yirbett", lastName:"Joseph"}
    thunkApi.dispatch(UserState.actions.user_set_user_acton(reaponse));
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    user_set_user_acton: (state, action:  PayloadAction<IUserState>) => {
      state = action.payload;
    },
 
  },
});


export const UserState = {
  actions: userSlice.actions,
  thunks: { user_load_user_thunk },
};

export default userSlice.reducer;
