import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import LoginPage from '../pages/auth/sign-in';
import Dashboard from '../pages/dashboard';
import SettingsPage from '../pages/settings';

// import POSPage from '@/apps/pos/POSPage';

export const AppRouter = () => (
    <Routes>
        {/* Rute Bebas Akses */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rute Terproteksi (Harus Login) */}
        <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<SettingsPage />} />
            {/* <Route path="/pos" element={<POSPage />} /> */}
        </Route>
    </Routes>
);