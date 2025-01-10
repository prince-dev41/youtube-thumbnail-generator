import {create} from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
    persist(
        (set) => ({
            thumbnails: [], 
            addThumbnail: (thumbnail) =>
                set((state) => ({
                    thumbnails: [...state.thumbnails, thumbnail],
                })),
            clearThumbnails: () => set({ thumbnails: [] }),
        }),
        {
            name: "thumbnail-storage",
        }
    )
);

export default useStore;
