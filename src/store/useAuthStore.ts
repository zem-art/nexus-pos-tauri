import { create } from 'zustand';

interface AuthState {
    isAuthenticated: boolean;
    login: (username: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    // Inisialisasi awal tetap cek localStorage agar saat refresh tidak logout
    isAuthenticated: localStorage.getItem('isLoggedIn') === 'true',

    // // logic when mode procution with rust api
    // login: async (username, password) => {
    //     try {
    //         // Memanggil fungsi 'authenticate_user' yang kamu buat di Rust (main.rs)
    //         const success = await invoke('authenticate_user', { username, password });
    //         if (success) {
    //             set({ isAuthenticated: true });
    //             localStorage.setItem('isLoggedIn', 'true');
    //         }
    //     } catch (error) {
    //         console.error("Login gagal lewat Rust:", error);
    //     }
    // }

    // logic when mode test development
    login: (username) => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        set({ isAuthenticated: true });
    },

    logout: () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        set({ isAuthenticated: false });
    },
}));