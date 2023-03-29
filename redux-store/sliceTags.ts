import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type TagType = {
    id: number,
    count: number,
    description: string,
    link: string,
    name: string,
    slug: string,
    taxonomy: string,
    parent: number
}

export interface TagsStateType {
    data: TagType[] | []
}

const initialTagsState: TagsStateType = { data: [] }

const sliceTags = createSlice({
    name: 'reduxTags',
    initialState: initialTagsState,
    reducers: {
        setTags: (state, action: PayloadAction<TagType[]>) => {
            state.data = action.payload
        }
    }
})

export const { setTags } = sliceTags.actions
export default sliceTags.reducer