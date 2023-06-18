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
                gray : "#D9D9D9",
                grey : "#818181"
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
            },
            fontSize : {
                text12 : "12px",
                text14 : "14px",
                text16 : "16px",
                text18 : "18px",
            },
            fontWeight : {
                500: 500,
                600 : 600,
                700 : 700,
                800 : 800
            },
            padding : {
                5 : "5px",
                10 : "10px",
                15 : "15px",
                20 : "20px"
            }
        },
    },
    plugins: [],
}
