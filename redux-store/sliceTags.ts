import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TagType } from '@/types/system';
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