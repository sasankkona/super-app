/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brandGreen: '#72db73',
                darkBg: '#000000',
                cardBg: '#111111',

                // Needed because the UI uses text-white-200 / text-white-300 etc.
                white: {
                    200: '#E5E7EB', // text-white-200
                    300: '#D1D5DB', // text-white-300
                },
            },
            fontFamily: {
                cursive: ['"Single Day"', 'cursive'], // For "Super app" logo
                sans: ['Roboto', 'sans-serif'],
            }
        },
    },
    plugins: [],
}