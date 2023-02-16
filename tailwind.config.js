// npx tailwindcss-cli -i ./src/components/GlobalStyles/Tailwindcss/input.css -o ./src/components/GlobalStyles/Tailwindcss/Tailwind.css
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,css}"],
  theme: {
    extend: {
      //Spacing
      spacing: {
        'content': '1150px',
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '13': '52px',
        '14': '56px',
        '15': '60px',
        '16': '64px',
        '17': '68px',
        '18': '72px',
        '19': '76px',
        '20': '80px',
        '25': '100px',
        '30': '120px',
        '40': '160px',
        '60': '240px',
        '90': '360px',
        '100': '400px',
        '125': '500px'
      },

      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom, #FFEEDE, #FBF2F7, #EAD8FE)'
      },
      backgroundSize: {
        '100': '100%'
      },

      colors: {
        'purple-main': '#9371ba', 
        'orange-main': '#ffeede'
      }
      

    },
    spacing: {
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
