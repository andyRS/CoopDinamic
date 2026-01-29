# 🏦 CoopDinámica - Aplicación React + Tailwind CSS

Aplicación web moderna para la Cooperativa de Ahorros y Créditos CoopDinámica, migrada completamente de HTML/CSS/JS a React con Tailwind CSS.

## 📋 Características

- ✅ **React 18** con componentes funcionales y hooks
- ✅ **Tailwind CSS** para estilos (sin CSS externo)
- ✅ **React Router** para navegación entre páginas
- ✅ **Calculadora de Préstamos** con tabla de amortización
- ✅ **Slider de Imágenes** con controles y autoplay
- ✅ **Carousel de Servicios** responsivo
- ✅ **Accordion FAQ** interactivo
- ✅ **Formulario de Contacto** con validación
- ✅ **Diseño 100% Responsive**
- ✅ **Navegación multinivel** (dropdowns)

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js (v16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Extraer el proyecto**
   ```bash
   cd coopdinamica-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
coopdinamica-react/
├── public/
│   └── img/                    # Imágenes (Logo, slider, noticias)
├── src/
│   ├── components/
│   │   ├── layout/            # Header, Navigation, Footer
│   │   ├── ui/                # Loader, SearchBox, Accordion
│   │   └── features/          # ImageSlider, Carousels, FAQ
│   ├── pages/                 # Home, Blog, Calculator, Contact
│   ├── App.jsx                # Configuración de rutas
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Tailwind directives
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Componentes Principales

### Layout
- **Header** - Logo y búsqueda con autocomplete
- **Navigation** - Menú multinivel con dropdowns
- **Footer** - 3 columnas (info, menú, redes sociales)

### Features
- **ImageSlider** - Slider automático con 7 imágenes
- **ServicesCarousel** - Carousel de servicios
- **FAQSection** - Preguntas frecuentes con accordion
- **Calculator** - Calculadora de préstamos con amortización

### UI
- **Loader** - Pre-loader animado
- **SearchBox** - Búsqueda con autocomplete
- **Accordion** - Componente reutilizable

## 📄 Páginas

1. **Home** (`/`)
   - Slider principal
   - Carousel de servicios
   - Sección "Por qué asociarse"
   - Noticias y eventos
   - FAQ

2. **Blog** (`/blog`)
   - Grid de artículos
   - Categorías
   - Cards con imágenes

3. **Calculadora** (`/calculadora-prestamos`)
   - Formulario de cálculo
   - Resultados visuales
   - Tabla de amortización completa

4. **Contacto** (`/formulario`)
   - Formulario con validación
   - Información de contacto
   - Mapa de ubicación

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 18.2.0 | Framework UI |
| React Router | 6.20.0 | Navegación |
| Tailwind CSS | 3.3.6 | Estilos |
| Vite | 5.0.8 | Build tool |
| date-fns | 2.30.0 | Manejo de fechas |

## 🎯 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
```

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🎨 Colores del Brand

```css
--coop-green: #09a337
--coop-dark-green: #07872d
--coop-blue: #4685fa
```

## ⚙️ Configuración de Tailwind

Los colores, fuentes y animaciones personalizadas están configurados en `tailwind.config.js`:

```javascript
colors: {
  'coop-green': '#09a337',
  'coop-blue': '#4685fa',
}
fontFamily: {
  'roboto': ['Roboto', 'sans-serif'],
  'montserrat': ['Montserrat', 'sans-serif'],
  'open-sans': ['Open Sans', 'sans-serif'],
}
```

## 🔧 Características Técnicas

### Slider de Imágenes
- Autoplay con intervalo de 5 segundos
- Respeta `prefers-reduced-motion`
- Controles de pausa/play
- Indicadores clickeables
- Transiciones suaves

### Calculadora de Préstamos
- Cálculo de cuota mensual
- Tabla de amortización detallada
- Formato de números con separadores
- Validación de formulario
- Exportable a formato visual

### Formulario de Contacto
- Validación en tiempo real
- Mensajes de error personalizados
- Confirmación de envío
- Reset automático

## 📝 Notas de Migración

### Cambios Realizados
1. ✅ jQuery eliminado completamente
2. ✅ Todo el CSS convertido a Tailwind
3. ✅ Eventos DOM → Eventos React
4. ✅ Moment.js → date-fns (más ligero)
5. ✅ Componentes funcionales con hooks

### Funcionalidad Preservada
- ✅ Diseño visual 100% idéntico
- ✅ Comportamiento del slider original
- ✅ Autocomplete de búsqueda
- ✅ Dropdowns multinivel
- ✅ Accordion FAQ
- ✅ Validación de formularios

## 🐛 Troubleshooting

### El servidor no inicia
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Las imágenes no se cargan
Verifica que todas las imágenes estén en `/public/img/`

### Tailwind no aplica estilos
```bash
npm run build
```

## 📧 Soporte

Para cualquier pregunta o problema:
- Email: andy@ejemplo.com
- Proyecto: CoopDinámica React Migration

## 📄 Licencia

© 2024 CoopDinámica - Todos los derechos reservados

---

**Desarrollado por:** Andy Rosado  
**Tecnología:** React + Tailwind CSS + Vite  
**Fecha:** Enero 2024
