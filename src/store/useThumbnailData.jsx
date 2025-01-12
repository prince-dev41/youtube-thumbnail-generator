// useThumbnailData.jsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThumbnailDataStore = create(
  persist(
    (set) => ({
      videoId: '1UMXGa3-TRc',
      duration: '',
      date: '',
      channel: '',
      views: 0,
      title: '',
      thumbnailImage: '',
      authorPhoto: '',
      // Actions pour mettre à jour les états
      setVideoId: (id) => set({ videoId: id }),
      setDuration: (duration) => set({ duration }),
      setDate: (date) => set({ date }),
      setChannel: (channel) => set({ channel }),
      setViews: (views) => set({ views }),
      setTitle: (title) => set({ title }),
      setThumbnailImage: (thumbnailImage) => set({ thumbnailImage }),
      setAuthorPhoto: (authorPhoto) => set({ authorPhoto }),
    }),
    {
      name: 'thumbnail-data-storage',
    }
  )
);

export default useThumbnailDataStore;
