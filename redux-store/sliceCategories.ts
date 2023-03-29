import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type CategoryType = {
    id: number,
    count: number,
    description: string,
    link: string,
    name: string,
    slug: string,
    taxonomy: string,
    parent: number
}

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