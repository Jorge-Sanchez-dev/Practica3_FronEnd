# API Productos

Aplicación web desarrollada con Next.js, React y TypeScript que consume una API pública de productos para mostrar un listado de productos y permitir la búsqueda por nombre.
La aplicación está estructurada por componentes y utiliza una ruta dinámica para acceder al detalle de cada producto de forma individual.

## Como ejecutar el código

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-nombre-usuraio/nombre-repositorio.git
cd nombre-repositorio
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣Ejecutar el proyecto en local
```bash
npm run dev
```

Abrir el navegador en:
```bash
http://localhost:3000
```

## 📁 Archivos que contiene el código

A continuación se describen los archivos que han sido creados o modificados durante el desarrollo de la práctica, junto con su función dentro de la página web.

---

### 🔹 `src/app/page.tsx`
Página principal de la aplicación.
Aquí se muestra el buscador, el botón de búsqueda y el listado de países obtenidos desde la API.

---

### 🔹 `src/app/component/productCard.tsx`
Componente encargado de representar una tarjeta individual de cada producto.
Muestra información básica como la imagen, el título, la categoría y el precio.
Esta tarjeta es la que se muestra en la página principal.

---

### 🔹 `src/app/component/CardWrapper.tsx`
Componente reutilizable que actúa como contenedor visual de las tarjetas.
Recibe children y aplica una estructura común con bordes, sombreado y espaciado para mantener una apariencia uniforme.

---

### 🔹 `src/app/component/SearchBar.tsx`
Componente encargado de renderizar el campo de búsqueda.
Recibe por props el valor actual y la función que actualiza el estado del componente padre.

---

### 🔹 `src/app/product/[id]/page.tsx`
Página de detalle del producto mediante una ruta dinámica.
Cuando el usuario pulsa sobre un producto, accede a una URL dinámica con su identificador y puede visualizar información más detallada del mismo.

---

### 🔹 `src/app/product/[id]/galery.tsx`
Componente encargado de mostrar la galería de imágenes del producto dentro de la vista de detalle.

---

### 🔹 `src/lib/api/products.ts`
Archivo que contiene las funciones encargadas de realizar las peticiones a la API de productos, tanto para buscar productos como para obtener el detalle de uno en concreto.

---

### 🔹 `src/types/product.ts`
Definición del tipo Product con la estructura de datos que utiliza la aplicación.

---

### 🔹 `src/types/index.ts`
Archivo de reexportación de tipos para facilitar las importaciones.

---

## Funcionamiento de la aplicación
La aplicación realiza peticiones a una API pública de productos para mostrar la información en pantalla.
En la página principal, el usuario puede escribir el nombre de un producto en el buscador y pulsar el botón de búsqueda para localizar los resultados deseados.
Además, cada tarjeta de producto permite navegar a una vista de detalle con una ruta dinámica, lo que permite generar una página específica para cada producto de manera individual.
En la vista de detalle se muestra información más completa, como la categoría, la marca, la descripción, el precio, el stock, la valoración, el peso y las dimensiones del producto. También se incluye un enlace para volver a la página principal y realizar una nueva búsqueda.

