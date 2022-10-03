/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-./,
      variants: ['md'],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        'Alata': ['Alata', 'sans-serif'],
        'Josefin-Sans': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'darkGray': 'hsl(0, 0%, 55%)',
        'veryDarkGray': 'hsl(0, 0%, 41%)'
      },
      backgroundImage: {
        'img-hero-desktop': "url('./assets/images/desktop/image-hero.jpg')",
        'img-hero-mobile': "url('./assets/images/mobile/image-hero.jpg')",
        'deep-earth-desktop': "url('./assets/images/desktop/image-deep-earth.jpg')",
        'deep-earth-mobile': "url('./assets/images/mobile/image-deep-earth.jpg')",
        'night-arcade-desktop': "url('./assets/images/desktop/image-night-arcade.jpg')",
        'night-arcade-mobile': "url('./assets/images/mobile/image-night-arcade.jpg')",
        'soccer-team-desktop': "url('./assets/images/desktop/image-soccer-team.jpg')",
        'soccer-team-mobile': "url('./assets/images/mobile/image-soccer-team.jpg')",
        'grid-desktop': "url('./assets/images/desktop/image-grid.jpg')",
        'grid-mobile': "url('./assets/images/mobile/image-grid.jpg')",
        'up-above-desktop': "url('./assets/images/desktop/image-from-above.jpg')",
        'up-above-mobile': "url('./assets/images/mobile/image-from-above.jpg')",
        'pocket-borealis-desktop': "url('./assets/images/desktop/image-pocket-borealis.jpg')",
        'pocket-borealis-mobile': "url('./assets/images/mobile/image-pocket-borealis.jpg')",
        'curiosity-desktop': "url('./assets/images/desktop/image-curiosity.jpg')",
        'curiosity-mobile': "url('./assets/images/mobile/image-curiosity.jpg')",
        'fisheye-desktop': "url('./assets/images/desktop/image-fisheye.jpg')",
        'fisheye-mobile': "url('./assets/images/mobile/image-fisheye.jpg')",
      }
    },
  },
  plugins: [],
}
