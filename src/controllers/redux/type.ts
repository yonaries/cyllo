//Todo: understand what the 2 lines of code below does

import { store } from "../..";

//? Infer the `RootState` and `AppDispatch` types from the store itself
export type UserState = ReturnType<typeof store.getState>;
export type toastState = ReturnType<typeof store.getState>;
export type selectionState = ReturnType<typeof store.getState>;
