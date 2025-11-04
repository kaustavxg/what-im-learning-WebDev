import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: 'Light',
    toggleTheme: () => set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
    }))
}))