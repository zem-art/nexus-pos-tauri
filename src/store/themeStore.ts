import { create } from 'zustand';

interface ThemeState {
    isDark: boolean;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    isDark: localStorage.getItem('theme') === 'dark',
    toggleTheme: () => set((state) => {
        const newDark = !state.isDark;
        localStorage.setItem('theme', newDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', newDark);
        return { isDark: newDark };
    }),
}));