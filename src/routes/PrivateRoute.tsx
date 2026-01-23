import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export const PrivateRoute = () => {
    // Logic: Cek apakah petugas sudah login (misal dari LocalStorage atau Zustand)
    // const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};