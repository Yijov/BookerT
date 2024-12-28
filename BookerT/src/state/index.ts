import { CoreStore } from "./store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { CoreProvider } from "./provider";
import { UserState, ApplicationState } from "./features";

export const CoreStateProvider = CoreProvider;

export const useCoreDispatch: () => typeof CoreStore.dispatch = useDispatch;

export const useCoreState: TypedUseSelectorHook<
  ReturnType<typeof CoreStore.getState>
> = useSelector;

export const useCoreActions=()=>{
   return {
    ...UserState.actions,
    ...ApplicationState.actions
  }
}

export const useCoreThunks=()=>{
  return {
    ...UserState.thunks,
    ...ApplicationState.thunks
  }

}





