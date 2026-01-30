# 🚀 CoopDinámica React Premium - Versión 2.0

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Aplicación web **premium y moderna** para CoopDinámica con interfaz de última generación, animaciones fluidas y experiencia de usuario excepcional.

---

## ✨ NUEVAS CARACTERÍSTICAS PREMIUM

### 🎨 **Interfaz Modernizada**
- ✅ **Glassmorphism** en header (efecto cristal con blur)
- ✅ **Modo Oscuro** completo con toggle animado
- ✅ **Animaciones Framer Motion** en todos los componentes
- ✅ **Micro-interacciones** en botones, cards y formularios
- ✅ **Skeleton Loaders** para carga elegante
- ✅ **Scroll Reveal** con animaciones progresivas

### 🔔 **Sistema de Notificaciones**
- ✅ **Toast Notifications** (React Hot Toast)
- ✅ **4 tipos**: Success, Error, Warning, Info
- ✅ **Centro de notificaciones** con badge animado
- ✅ **Notificaciones push** en tiempo real
- ✅ **Historial** de notificaciones

### 🎯 **Header Premium**
- ✅ **Sticky con blur** al hacer scroll
- ✅ **Shrink animation** (se achica al scrollear)
- ✅ **Avatar de usuario** con dropdown
- ✅ **Toggle modo oscuro** con animación sol/luna
- ✅ **Notificaciones** con contador animado
- ✅ **Search expandible** con animaciones

### 🎨 **Animaciones y Efectos**
- ✅ **Hover effects** con scale y glow
- ✅ **Ripple effect** en botones
- ✅ **Floating animations** en elementos
- ✅ **Gradient animado** en fondos
- ✅ **Fade, Slide, Bounce** en transiciones
- ✅ **Shake animation** en errores

### 📊 **Calculadora Mejorada**
- ✅ **Gráficas interactivas** (Chart.js)
- ✅ **Visualización** interés vs capital
- ✅ **Números animados** (count-up effect)
- ✅ **Exportar a PDF** (próximamente)
- ✅ **Comparador de escenarios**

### 🎭 **Componentes Interactivos**
- ✅ **Cards con elevación 3D**
- ✅ **Mega menu** con imágenes
- ✅ **Floating labels** en inputs
- ✅ **Progress indicators** animados
- ✅ **Custom scrollbars** estilizados

---

## 📦 INSTALACIÓN

### Requisitos Previos
- Node.js v16+
- npm o yarn

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:3000
```

---

## 🛠️ TECNOLOGÍAS

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 18.2.0 | Framework UI |
| Framer Motion | 10.16.16 | Animaciones |
| React Hot Toast | 2.4.1 | Notificaciones |
| Chart.js | 4.4.0 | Gráficas |
| React Icons | 4.12.0 | Iconos modernos |
| Tailwind CSS | 3.3.6 | Estilos |
| Vite | 5.0.8 | Build tool |
| React Router | 6.20.0 | Navegación |

---

## 🎨 PALETA DE COLORES

### Light Mode
```css
--coop-green: #09a337
--coop-dark-green: #07872d
--coop-blue: #4685fa
--success: #10b981
--error: #ef4444
--warning: #f59e0b
--info: #3b82f6
```

### Dark Mode
```css
--dark-bg: #0f1419
--dark-card: #1a1f2e
--dark-text: #e1e8ed
--coop-light-green: #10b981
```

---

## 📁 ESTRUCTURA DEL PROYECTO

```
coopdinamica-react-premium/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx          ⭐ PREMIUM
│   │   │   ├── Navigation.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── Loader.jsx          ⭐ PREMIUM
│   │   │   ├── SearchBox.jsx       ⭐ PREMIUM
│   │   │   └── Accordion.jsx
│   │   └── features/
│   │       ├── ImageSlider.jsx
│   │       ├── ServicesCarousel.jsx
│   │       └── FAQSection.jsx
│   ├── contexts/
│   │   ├── ThemeContext.jsx        ⭐ NUEVO
│   │   └── NotificationContext.jsx ⭐ NUEVO
│   ├── hooks/
│   │   └── useScrollReveal.js      ⭐ NUEVO
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── Calculator.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/img/
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🎯 CARACTERÍSTICAS PRINCIPALES

### 1. **Modo Oscuro Automático**
```jsx
import { useTheme } from './contexts/ThemeContext'

const { isDark, toggleTheme } = useTheme()
```

### 2. **Notificaciones Toast**
```jsx
import { useNotification } from './contexts/NotificationContext'

const notify = useNotification()

notify.success('¡Operación exitosa!')
notify.error('Ocurrió un error')
notify.warning('Advertencia importante')
notify.info('Información útil')
```

### 3. **Animaciones Scroll Reveal**
```jsx
import { useScrollReveal } from './hooks/useScrollReveal'

const [ref, isVisible] = useScrollReveal({ once: true })

<div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
  Contenido
</div>
```

---

## 🚀 SCRIPTS DISPONIBLES

```bash
npm run dev      # Servidor de desarrollo (Puerto 3000)
npm run build    # Build de producción
npm run preview  # Vista previa del build
```

---

## 🎨 CLASES TAILWIND PERSONALIZADAS

### Botones
```jsx
className="btn-primary"    // Botón principal con gradiente
className="btn-secondary"  // Botón secundario
className="btn-ghost"      // Botón transparente
```

### Efectos
```jsx
className="glass"          // Efecto glassmorphism
className="card-hover"     // Hover con elevación 3D
className="ripple"         // Efecto ripple al click
className="skeleton"       // Skeleton loader
```

### Animaciones
```jsx
className="animate-fade-in-up"    // Fade in desde abajo
className="animate-bounce-in"     // Bounce in
className="animate-slide-up"      // Slide up
className="animate-pulse-glow"    // Pulse con glow
```

---

## 📱 RESPONSIVE DESIGN

- 📱 **Mobile First** (< 768px)
- 💻 **Tablet** (768px - 1024px)
- 🖥️ **Desktop** (> 1024px)
- 📺 **4K Ready** (> 1920px)

---

## 🔥 MEJORAS vs VERSIÓN 1.0

| Característica | v1.0 | v2.0 Premium |
|----------------|------|--------------|
| Animaciones | Básicas | Framer Motion |
| Modo Oscuro | ❌ | ✅ Completo |
| Notificaciones | ❌ | ✅ Toast System |
| Header | Estático | ✅ Sticky + Glassmorphism |
| Loader | Simple | ✅ Animado con progreso |
| Search | Básico | ✅ Expandible + Animado |
| Hover Effects | Planos | ✅ 3D + Glow |
| Skeleton Loading | ❌ | ✅ Incluido |
| Scroll Animations | ❌ | ✅ Reveal on Scroll |

---

## 🎓 USO RECOMENDADO

### 1. **Notificaciones en Formularios**
```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  const loadingToast = notify.loading('Enviando...')
  
  try {
    await submitForm(data)
    notify.dismiss(loadingToast)
    notify.success('✅ Formulario enviado correctamente')
  } catch (error) {
    notify.dismiss(loadingToast)
    notify.error('❌ Error al enviar formulario')
  }
}
```

### 2. **Animaciones en Cards**
```jsx
<motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  whileTap={{ scale: 0.95 }}
  className="card-hover"
>
  Contenido
</motion.div>
```

### 3. **Modo Oscuro en Componentes**
```jsx
<div className="bg-white dark:bg-dark-card 
                text-gray-900 dark:text-dark-text">
  Contenido adaptable
</div>
```

---

## 🐛 TROUBLESHOOTING

### Puerto 3000 ocupado
```bash
# Cambiar puerto en vite.config.js
server: { port: 3001 }
```

### Animaciones no funcionan
```bash
# Reinstalar Framer Motion
npm install framer-motion@latest
```

### Modo oscuro no persiste
```bash
# Limpiar localStorage
localStorage.clear()
```

---

## 📞 SOPORTE

- 📧 Email: andy@coopdinamica.com
- 📚 Documentación: Ver archivos en `/docs`
- 🐛 Issues: Reportar en el repositorio

---

## 📄 LICENCIA

MIT License - © 2024 CoopDinámica

---

## 👨‍💻 DESARROLLADO POR

**Andy Rosado**  
Senior Frontend Developer  
React + Tailwind CSS + Framer Motion Specialist

---

**🎉 ¡Disfruta de CoopDinámica Premium! 🎉**
