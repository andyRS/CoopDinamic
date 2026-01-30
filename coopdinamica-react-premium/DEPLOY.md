# 🚀 GUÍA DE DEPLOY A GITHUB PAGES

## 📋 PREPARACIÓN

### 1️⃣ **Crear Repositorio en GitHub**

1. Ve a GitHub: https://github.com/new
2. Nombre del repositorio: `coopdinamica-react` (o el que prefieras)
3. Descripción: "CoopDinámica - Aplicación React Premium"
4. Público o Privado: Tu elección
5. **NO** inicialices con README
6. Click en "Create repository"

---

## 🔧 CONFIGURACIÓN INICIAL

### 2️⃣ **Actualizar Base URL**

Abre `vite.config.js` y cambia la línea:

```javascript
base: '/coopdinamica-react/',
```

Por el nombre de TU repositorio:

```javascript
base: '/TU-NOMBRE-REPO/',
```

**Ejemplo:** Si tu repo se llama `mi-cooperativa`:
```javascript
base: '/mi-cooperativa/',
```

---

## 🚀 MÉTODO 1: DEPLOY AUTOMÁTICO (GitHub Actions)

### ✅ **Más fácil y recomendado**

#### Paso 1: Subir código a GitHub

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "Initial commit - CoopDinámica Premium"

# Conectar con tu repo (CAMBIA usuario y repo)
git remote add origin https://github.com/USUARIO/NOMBRE-REPO.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

#### Paso 2: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (⚙️)
3. En el menú lateral, click en **Pages**
4. En "Source", selecciona: **GitHub Actions**
5. ¡Listo! El deploy se hará automáticamente

#### Paso 3: Verificar Deploy

1. Ve a la pestaña **Actions** en tu repo
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Cuando termine (✅), tu sitio estará en:

```
https://USUARIO.github.io/NOMBRE-REPO/
```

### 🔄 **Deploys Futuros**

Cada vez que hagas `git push`, se desplegará automáticamente:

```bash
# Hacer cambios
git add .
git commit -m "Descripción de cambios"
git push
```

---

## 🛠️ MÉTODO 2: DEPLOY MANUAL

### Para quienes prefieren control total

#### Opción A: Usando script de deploy

```bash
# 1. Editar deploy.sh y cambiar:
#    - usuario
#    - repositorio

# 2. Ejecutar script
./deploy.sh
```

#### Opción B: Usando npm

```bash
# 1. Instalar dependencias
npm install

# 2. Deploy
npm run deploy
```

#### Opción C: Manual paso a paso

```bash
# 1. Build del proyecto
npm run build

# 2. Navegar a dist
cd dist

# 3. Inicializar git
git init
git add -A
git commit -m 'Deploy'

# 4. Push a gh-pages (CAMBIA usuario/repo)
git push -f https://github.com/USUARIO/REPO.git main:gh-pages

# 5. Volver
cd ..
```

---

## ⚙️ CONFIGURACIÓN DE GITHUB PAGES

### Después del primer deploy:

1. Ve a: **Settings** → **Pages**
2. En "Branch", selecciona: `gh-pages`
3. Folder: `/ (root)`
4. Click en **Save**
5. Espera 1-2 minutos
6. ¡Visita tu sitio!

---

## 🔍 VERIFICACIÓN

### ✅ Checklist Post-Deploy

- [ ] El sitio carga en `https://usuario.github.io/repo/`
- [ ] Las imágenes se ven correctamente
- [ ] El modo oscuro funciona
- [ ] Las notificaciones aparecen
- [ ] La navegación funciona (Home, Blog, etc.)
- [ ] El formulario de contacto funciona
- [ ] La calculadora genera resultados

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Problema 1: Página en blanco

**Solución:** Verifica que `base` en `vite.config.js` coincida con tu repo:

```javascript
base: '/nombre-exacto-repo/',
```

### Problema 2: Imágenes no se cargan

**Solución:** Las rutas deben ser relativas:

```jsx
// ❌ MAL
<img src="/img/logo.png" />

// ✅ BIEN (ya está así en el proyecto)
<img src="/img/logo.png" />
```

### Problema 3: Rutas 404

**Solución:** El archivo `404.html` debe estar en `public/`

### Problema 4: GitHub Actions falla

**Solución:** 
1. Ve a Settings → Actions → General
2. En "Workflow permissions", selecciona: **Read and write permissions**
3. Click en Save
4. Vuelve a hacer push

### Problema 5: Deploy no se actualiza

**Solución:**
```bash
# Limpiar caché
rm -rf dist node_modules
npm install
npm run build
git push
```

---

## 🎨 PERSONALIZACIÓN

### Cambiar nombre del sitio

Edita `index.html`:
```html
<title>Tu Nombre - Cooperativa</title>
```

### Cambiar favicon

Reemplaza `/public/img/favicon.ico`

### Cambiar logo

Reemplaza `/public/img/Logo.png`

---

## 📊 ANALYTICS (Opcional)

### Agregar Google Analytics

1. Obtén tu ID de Google Analytics
2. Agrega en `index.html` antes de `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-ID');
</script>
```

---

## 🔐 DOMINIO PERSONALIZADO (Opcional)

### Si tienes un dominio propio:

1. Ve a Settings → Pages
2. En "Custom domain", ingresa: `www.tudominio.com`
3. Configura DNS en tu proveedor:

```
CNAME: www → usuario.github.io
```

---

## 📝 COMANDOS ÚTILES

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Deploy automático
npm run deploy

# Ver logs de GitHub Actions
# (desde la web, pestaña Actions)
```

---

## ✅ CHECKLIST FINAL

Antes de compartir tu sitio:

- [ ] ✅ Cambié `base` en `vite.config.js`
- [ ] ✅ Subí el código a GitHub
- [ ] ✅ Habilité GitHub Pages
- [ ] ✅ El sitio carga correctamente
- [ ] ✅ Probé en móvil y desktop
- [ ] ✅ Todas las funciones trabajan
- [ ] ✅ Modo oscuro funciona
- [ ] ✅ Notificaciones aparecen

---

## 🎉 ¡LISTO!

Tu sitio está en línea en:

```
https://TU-USUARIO.github.io/TU-REPO/
```

Comparte el link y disfruta de tu sitio premium 🚀

---

## 📞 SOPORTE

¿Problemas? Revisa:
1. Logs de GitHub Actions
2. Consola del navegador (F12)
3. Configuración de Pages

---

**Fecha:** Enero 2024  
**Versión:** 2.0.0  
**Tecnología:** React + Vite + Tailwind CSS
