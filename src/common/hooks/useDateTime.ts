import { useState, useEffect } from 'react';

// Mendefinisikan tipe data yang akan dikembalikan oleh hook
interface UseDateTimeReturn {
    currentTime: Date;
    formattedTime: string;
    formattedDate: string;
    greeting: string;
}

export const useDateTime = (): UseDateTimeReturn => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime: string = currentTime.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const formattedDate: string = currentTime.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'short'
    });

    const getGreeting = (): string => {
        const hour = currentTime.getHours();
        if (hour < 11) return 'Good morning';
        if (hour < 15) return 'Good afternoon';
        if (hour < 18) return 'Good afternoon';
        return 'Selamat Malam';
    };

    return {
        currentTime,
        formattedTime,
        formattedDate,
        greeting: getGreeting()
    };
};