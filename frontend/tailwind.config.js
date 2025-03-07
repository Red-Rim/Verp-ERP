// tailwind.config.js
module.exports = {
   content: [
     "./src/**/*.{html,js,jsx}",  // Ensure this points to your components and pages
   ],
   theme: {
     extend: {
       colors: {
         teal: {
           600: '#1F8A70', // Custom teal color
         },
         blue: {
           50: '#E3F8FF', // Light blue
         },
       },
     },
   },
   plugins: [],
 };
 