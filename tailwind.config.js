/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      screens: {
         phones: "768px",
         desktop: "992px",
         forBtn: "394px",
      },
   },
   plugins: [],
};
