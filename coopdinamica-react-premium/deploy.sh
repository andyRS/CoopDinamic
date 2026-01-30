#!/bin/bash

# Script de deploy manual para GitHub Pages
# Usar si prefieres deploy manual en lugar de GitHub Actions

echo "🚀 Iniciando deploy a GitHub Pages..."

# 1. Build del proyecto
echo "📦 Construyendo proyecto..."
npm run build

# 2. Navegar al directorio dist
cd dist

# 3. Inicializar repo git
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# 4. Push forzado a la rama gh-pages
# IMPORTANTE: Cambia 'usuario' y 'repositorio' por tus datos
git push -f https://github.com/usuario/repositorio.git main:gh-pages

echo "✅ Deploy completado!"
echo "🌐 Tu sitio estará disponible en: https://usuario.github.io/repositorio/"

cd ..
