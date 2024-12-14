import { extendTheme } from '@chakra-ui/react';

// Кастомизация темы
const customTheme = extendTheme({
    colors: {
        brand: {
            50: '#f5f7ff',
            100: '#dce1ff',
            200: '#b3baff',
            300: '#8094ff',
            400: '#5d77ff',
            500: '#3d58ff', // Основной цвет
            600: '#2e46cc',
            700: '#223599',
            800: '#172566',
            900: '#0d1533',
        },
    },
    fonts: {
        heading: "'Poppins', sans-serif",
        body: "'Roboto', sans-serif",
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.800',
            },
        },
    },
});

export default customTheme;
