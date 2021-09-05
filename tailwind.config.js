module.exports = {
  purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
       
      },
        extend: {
          spacing: {
            "row": "calc(100% + 2rem)",
          },
          inset: {
            '17': '68px',
            '26': '104px',
          }
        },
    },
    variants: {
        extend: {
            filter: ['hover', 'focus'],
            brightness: ['hover', 'focus'],
        },
    },
    plugins: [],
}
