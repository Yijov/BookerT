import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IApplicationSettings {
    theme:"light"|"dark";
  }
  

export interface IApplicationState extends IApplicationSettings{
  loading:boolean;
}

const initialState: IApplicationState = {
    theme: "light",
    loading: false
};

export const application_load_settings_thunk = createAsyncThunk(
  "APPLICATION_STATE/LOAD_SETTINGS",
  async (_data: any = null, thunkApi) => {
    const reaponse:IApplicationSettings ={ theme:"light"}
    thunkApi.dispatch(ApplicationState.actions.application_set_settings_acton(reaponse));
  }
);

export const ApplicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    application_set_settings_acton: (state, action: PayloadAction<IApplicationSettings>) => {
      state = {...state, ...action.payload};
    },
    application_toogle_theme_acton: (state) => {
      state.theme =state.theme==="dark"? "light":"dark" ;
    },
     application_toogle_loading_acton: (state) => {
      state.loading =!state.loading;
    },
 
  },
});


export const ApplicationState = {
  actions: ApplicationSlice.actions,
  thunks: { application_load_settings_thunk },
};

export default ApplicationSlice.reducer;
