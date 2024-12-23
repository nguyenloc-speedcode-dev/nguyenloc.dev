import { create } from "zustand";

export type GlobalAppState = {
  isDarkMode: boolean;
};

export type GlobalAppActions = {
  toggleDarkMode: (val: boolean) => void;
};

export const useStore = create<GlobalAppState & GlobalAppActions>((set) => ({
  isDarkMode: false,
  toggleDarkMode: (val: boolean) => {
    set((state) => {
      state.isDarkMode = val;
      return { ...state };
    });
  },
}));
