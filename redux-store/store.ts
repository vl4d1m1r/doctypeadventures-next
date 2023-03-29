import { configureStore } from "@reduxjs/toolkit"
import categoriesReducer from "./sliceCategories"
import tagsReducer from "./sliceTags"

export const store = configureStore({
    reducer: {
        categoriesData: categoriesReducer,
        tagsData: tagsReducer
    }
})

// We need to export our store schemas for any TS component that will use/need it
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch