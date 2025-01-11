import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useSettingBarStore = create(
  persist(
    (set) => ({
      url: "https://www.youtube.com/watch?v=rSV0D9Tfh_w",
      progress: 30,
      statClicked: false,
      channelClicked: false,
      durationClicked: false,
      isDark: false,
      size: 3,
      isAdvance: true,
      rounding: 40,
      textSize: 40,
      spacing: 50,


      
      videoId: '',
      duration: '',
      date: '',
      channel: '',
      views: 34567654,
      title: 'Hello world',
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


      // Actions pour mettre à jour les états
      setProgress: (value) => set({ progress: value }),
      setUrl: (value)  => set({ url: value}),
      toggleStatClick: () => set((state) => ({ statClicked: !state.statClicked })),
      toggleChannelClick: () => set((state) => ({ channelClicked: !state.channelClicked })),
      toggleDurationClick: () => set((state) => ({ durationClicked: !state.durationClicked })),
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
      setSize: (value) => set({ size: value }),
      toggleAdvance: () => set((state) => ({ isAdvance: !state.isAdvance })),
      setRounding: (value) => set({ rounding: value }),
      setTextSize: (value) => set({ textSize: value }),
      setSpacing: (value) => set({ spacing: value }),
    }),
    {
      name: 'setting-bar-storage',
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useSettingBarStore;
