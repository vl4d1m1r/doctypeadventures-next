'use client'

import { useRef } from "react"
import { store } from '../store'
import { setCategories } from "../sliceCategories"
import { setTags } from "../sliceTags"
import { CategoryType, TagType } from "@/types/system"


const SyncStoreWithClient = ({ categories, tags }: { categories: CategoryType[], tags: TagType[] }) => {
    const loaded = useRef(false)
    if (!loaded.current) {
        store.dispatch(setCategories(categories))
        store.dispatch(setTags(tags))
        loaded.current = true
    }
    return null
}

export default SyncStoreWithClient