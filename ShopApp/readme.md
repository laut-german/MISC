# ShopApp
*EN DESARROLLO*

## Descripción
ShopApp es una aplicación para negocios y usuarios que quieran vender y comprar productos de manera eficiente.

## Requisitos Previos
### Herramientas necesarias
- **Node.js** (versión 20 o superior)
- **Docker** y **Docker Compose**
- **Prisma CLI** (instalado como dependencia de desarrollo)

## Instrucciones para la Configuración

### 1. Configura y levanta la Base de Datos con Docker

1. Asegúrate de estar en el directorio `SHOP_BACK`.
2. Levanta la base de datos con Docker Compose:

    ```bash
    docker-compose up -d
    ```

### 2. Configura las Variables de Entorno

1. Crea el archivo `.env` en el directorio `SHOP_BACK` si aún no existe.
2. Agrega las variables necesarias al archivo `.env`:

    ```bash
    echo "DATABASE_URL='postgresql://klkmanin:S3cret@localhost:5432/ebayCopyDB?schema=public'" >> .env
    echo "SECRET_KEY='klkmanito'" >> .env
    ```

### 3. Configura la Base de Datos con Prisma

Prisma ofrece dos maneras de sincronizar el esquema con la base de datos: **migraciones** (`prisma migrate`) y **sincronización directa** (`prisma db push`). A continuación, te explicamos cuándo usar cada uno.

- **Si estás en desarrollo y deseas tener un control completo de los cambios en la base de datos**, usa `prisma migrate`. Este comando generará una migración que Prisma puede rastrear y aplicar en cualquier entorno. Ejecuta el siguiente comando:

    ```bash
    npx prisma migrate dev --name init
    ```

- **Si solo quieres sincronizar el esquema sin generar archivos de migración** (útil para desarrollo rápido o cuando trabajas en entornos temporales), utiliza `prisma db push`. Este comando actualiza la base de datos según el esquema actual sin crear una migración. Para ejecutarlo:

    ```bash
    npx prisma db push
    ```

> **Nota:** En entornos de producción, siempre se recomienda utilizar `prisma migrate` para mantener un historial de cambios en la estructura de la base de datos.

4. Genera el cliente de Prisma para asegurarte de que esté sincronizado con los modelos:

    ```bash
    npx prisma generate
    ```

### 4. Inicia la Aplicación

1. Ejecuta la aplicación en modo de desarrollo:

    ```bash
    npm run start:dev
    ```

La aplicación ahora debería estar corriendo en `http://localhost:3000`.

---

## Comandos Rápidos

- **Instalar dependencias**: `npm install`
- **Levantar la base de datos con Docker**: `docker-compose up -d`
- **Aplicar migraciones**: `npx prisma migrate dev --name init`
- **Sincronizar sin migración (opcional)**: `npx prisma db push`
- **Generar cliente Prisma**: `npx prisma generate`
- **Iniciar la aplicación**: `npm run start:dev`

---

Este README detalla todos los pasos necesarios para instalar, configurar y ejecutar la aplicación `ShopApp`.