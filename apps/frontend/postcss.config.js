module.exports = {
  plugins: {
    "@tailwindcss/postcss": {
      config: "./tailwind.config.js", // Ruta explícita al tailwind.config.js del frontend
    },
    autoprefixer: {},
  },
};
