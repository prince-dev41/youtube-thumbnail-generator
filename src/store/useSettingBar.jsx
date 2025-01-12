import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const useSettingBarStore = create(
  persist(
    (set) => ({
      url: "https://www.youtube.com/watch?v=hqsHSRvZWCg",
      progress: 30,
      statClicked: false,
      channelClicked: false,
      durationClicked: false,
      isDark: false,
      size: 3,
      isAdvance: true,
      isCopying: false,
      rounding: 40,
      textSize: 40,
      spacing: 50,
      // Actions pour mettre à jour les états
      setProgress: (value) => set({ progress: value }),
      setUrl: (value)  => set({ url: value}),
      toggleStatClick: () => set((state) => ({ statClicked: !state.statClicked })),
      toggleChannelClick: () => set((state) => ({ channelClicked: !state.channelClicked })),
      toggleDurationClick: () => set((state) => ({ durationClicked: !state.durationClicked })),
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
      setSize: (value) => set({ size: value }),
      toggleAdvance: () => set((state) => ({ isAdvance: !state.isAdvance })),
      setIsCopying: () => set((state)=> ({isFetching: !state.isFetching})),
      setRounding: (value) => set({ rounding: value }),
      setTextSize: (value) => set({ textSize: value }),
      setSpacing: (value) => set({ spacing: value }),
    }),
    {
      name: 'setting-bar-storage',
    }
  )
);

export default useSettingBarStore;
