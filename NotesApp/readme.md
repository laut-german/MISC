# NotesApp

## Descripción
NotesApp es una aplicación backend para la gestión de notas que permite a los usuarios registrarse, iniciar sesión y administrar sus notas a través de una API REST. 

## Requisitos Previos
- **Node.js** (versión 14 o superior)
- **Docker** y **Docker Compose**
- **Git**

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/sezgox/MISC.git
cd NotesApp/BACK

### 2. Instalar las dependencias
```bash
npm install

### 3. Ejecutar el contenedor de la base de datos
Para ejecutar el contenedor de la base de datos, utiliza Docker Compose. Puedes ejecutar el siguiente comando:

```bash
docker-compose up -d

### 4. Levantar el backend
Para iniciar el backend, ejecuta el siguiente comando:

```bash
npm run dev

Si deseas modificar el código y quieres que los cambios se reflejen automáticamente, puedes utilizar el siguiente comando para ver los cambios en tiempo real:
npm run typescript

## Endpoints

### USERS
- **POST** `http://localhost:3002/users/register`  
  Recibe `username` y `password` como parámetros para registrar un nuevo usuario.

- **POST** `http://localhost:3002/users/login`  
  Requiere los mismos parámetros (`username` y `password`) para iniciar sesión.

### NOTES
- **GET** `http://localhost:3002/notes`  
  Obtiene todas las notas del usuario.

- **POST** `http://localhost:3002/notes/add`  
  Crea una nueva nota. Requiere los siguientes parámetros:  
  - `title`
  - `description`
  - `showall` (booleano)

- **GET** `http://localhost:3002/notes/:id`  
  Obtiene una nota específica por su `id`.

- **DELETE** `http://localhost:3002/notes/:id`  
  Elimina una nota específica por su `id`.

La aplicación también permite editar notas y otras funcionalidades, pero será mejor acceder a ellas desde el front.