/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["src/**/*.{ts,tsx}" , "pages/*"],
    theme: {
        extend: {
            colors : {
                black : "#2C2C2C",
                orange : "#EA650A",
                purple : "#513CD3",
                light : "#F3F3F3",
                gray : "#D9D9D9"
            },
            borderRadius : {
                b5 : "5px",
                b10 : "10px",
                b15 : "15px",
            },
            gap : {
                gap5 : "10px",
                gap10 : "10px",
                gap20 : "20px",
            }
        },
    },
    plugins: [],
}
