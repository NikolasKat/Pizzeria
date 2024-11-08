/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      screens: {
         forBtn: "394px",
         phones: "768px",
         desktop: "992px",
         extraWidthDesktop: "1024px",
      },
   },
   plugins: [],
};
