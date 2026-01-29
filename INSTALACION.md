# 🚀 GUÍA DE INSTALACIÓN RÁPIDA

## ⚡ Pasos para ejecutar el proyecto

### 1️⃣ Instalar Node.js
Si no tienes Node.js instalado:
- Descarga desde: https://nodejs.org/
- Versión recomendada: LTS (Long Term Support)

### 2️⃣ Abrir terminal en la carpeta del proyecto
```bash
cd coopdinamica-react
```

### 3️⃣ Instalar dependencias
```bash
npm install
```

Este comando instalará:
- React
- React Router
- Tailwind CSS
- Vite
- date-fns
- Y todas las dependencias necesarias

⏱️ **Tiempo estimado:** 2-3 minutos

### 4️⃣ Iniciar servidor de desarrollo
```bash
npm run dev
```

### 5️⃣ Abrir en el navegador
El proyecto se abrirá automáticamente en:
```
http://localhost:3000
```

Si no se abre automáticamente, copia y pega esa URL en tu navegador.

---

## 🎯 Comandos útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera versión de producción |
| `npm run preview` | Vista previa del build |

---

## ✅ Verificación de instalación exitosa

Si todo está bien, deberías ver:
1. ✅ Pre-loader animado
2. ✅ Header con logo "CoopDinámica"
3. ✅ Menú de navegación con dropdowns
4. ✅ Slider de imágenes automático
5. ✅ Sección de servicios
6. ✅ Footer con redes sociales

---

## 🐛 Problemas comunes

### Error: "command not found: npm"
**Solución:** Instala Node.js desde https://nodejs.org/

### Error: "Port 3000 already in use"
**Solución:** Cierra otras aplicaciones usando el puerto 3000 o edita `vite.config.js` para cambiar el puerto.

### Las imágenes no se cargan
**Solución:** Verifica que la carpeta `/public/img/` contenga todas las imágenes del proyecto original.

---

## 📞 Soporte

Si encuentras algún problema:
1. Revisa el archivo README.md
2. Verifica la consola del navegador (F12)
3. Revisa la terminal donde ejecutaste `npm run dev`

---

**¡Listo! Tu proyecto está corriendo en React + Tailwind CSS 🎉**
