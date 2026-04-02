# Anatomia Cards Offline

App mobile offline tipo flashcards para estudiar anatomia.

## Que hace

- Muestra una card por vez con imagen sin titulo.
- Tap 1: da vuelta la card y muestra nombre + explicacion.
- Tap 2 (o espera 1.8s): avanza a la siguiente card.
- El orden es aleatorio en cada ronda.
- Todo funciona con archivos locales, sin base de datos y sin backend.

## Estructura para cargar contenido

- Imagenes: `www/assets/images/`
- Datos de cards: `www/data/cards.js`

Cada card usa este formato:

- `id`: numero unico
- `title`: nombre de la estructura
- `description`: texto breve
- `image`: ruta relativa, por ejemplo `assets/images/rodilla.jpg`

## Ejecutar como web local

1. Instalar dependencias:
   - `npm install`
2. Levantar server local:
   - `npm run serve`
3. Abrir la URL que te muestre la terminal.

## Empaquetar como APK (offline)

Requisitos:

- Node.js 18+
- Android Studio
- SDK de Android configurado

Pasos:

1. Instalar dependencias:
   - `npm install`
2. Crear proyecto Android (una sola vez):
   - `npm run android:add`
3. Sincronizar web assets con Android:
   - `npm run cap:sync`
4. Abrir Android Studio:
   - `npm run android:open`
5. En Android Studio:
   - Build > Build Bundle(s) / APK(s) > Build APK(s)

El APK generado incluye los archivos locales de `www`, por lo que funciona offline.

## Como cargar tus 60 imagenes

1. Copia tus imagenes en `www/assets/images/`.
2. Edita `www/data/cards.js` y agrega una entrada por imagen.
3. Mantene nombres de archivo simples (ejemplo: `hombro_01.jpg`).
4. Ejecuta `npm run cap:sync` antes de generar el APK final.

## Publicar gratis con GitHub Pages

Este repo ya incluye workflow de deploy automatico en `.github/workflows/deploy-pages.yml`.

### Pasos

1. Crea un repo en GitHub y sube este proyecto.
2. Asegurate de usar la rama `main`.
3. En GitHub ve a Settings > Pages.
4. En Build and deployment, selecciona Source: `GitHub Actions`.
5. Haz push a `main` y espera que termine el workflow "Deploy GitHub Pages".
6. Tu web quedara publicada en:
   - `https://TU_USUARIO.github.io/TU_REPO/`

### Notas

- El contenido publicado es exactamente la carpeta `www`.
- Cada push a `main` vuelve a desplegar automaticamente con versionado en Git.
