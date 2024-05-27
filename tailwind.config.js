/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Background': 'hsl(0, 0%, 8%)',
        'green-black':'hsl(75, 94%, 57%)',
        'button' :'hsl(0, 0%, 20%)',
        'white-fx':'hsl(0, 0%, 100%)',
        'dark-page':'hsl(0, 0%, 12%)',
      },
      width: {
        '400': '400px',
        '120':'120px',
      },
      height: {
        '670': '670px',
      }
    },
  },
  plugins: [],
}

