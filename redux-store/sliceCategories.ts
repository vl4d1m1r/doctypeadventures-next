import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CategoryType } from '@/types/system';
export interface CategoriesStateType {
    data: CategoryType[] | []
}

const initialCategoriesState: CategoriesStateType = { data: [] }

const sliceCategories = createSlice({
    name: 'reduxCategories',
    initialState: initialCategoriesState,
    reducers: {
        setCategories: (state, action: PayloadAction<CategoryType[]>) => {
            state.data = action.payload
        }
    }
})

export const { setCategories } = sliceCategories.actions
export default sliceCategories.reducer