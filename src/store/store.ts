import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import personSilce from './persons/fetchPerson';


export const store = configureStore({
    reducer: {
        persons: personSilce,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
