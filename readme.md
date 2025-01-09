# Guía de Configuración de Proyecto Vue con Tailwind CSS

## Crear Proyecto en Vue

```bash
npm create vite@latest
```

1. Seleccionar `vue`
2. Seleccionar `vue 3`
3. Seleccionar `javascript`

## Instalar Dependencias

```bash
npm install
```

## Correr el Proyecto

```bash
npm run dev
```

## Instalar Tailwind CSS

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

## Crear Archivo de Configuración de Tailwind CSS

```bash
npx tailwindcss init -p
```

## Crear Archivo de Configuración de PostCSS

```bash
touch postcss.config.js
```

## Agregar Configuración de Tailwind CSS en `postcss.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Editar `styles.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Volver a Correr el Proyecto

```bash
npm run dev
```

## Añadir el plugins en Vscode

```bash
ext install esbenp.prettier-vscode
ext install octref.vetur
```

## Añadir el Vue.js devtools en el navegador

```bash
https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
```
