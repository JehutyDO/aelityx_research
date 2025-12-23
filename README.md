# 🔬 Aelityx Research & Development

<div align="center">

![Aelityx Logo](public/aelityx_blue.svg)

**Plataforma de Investigación y Desarrollo en Ciencia de Datos**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Demo en Vivo](#) • [Documentación](#estructura-del-proyecto) • [Contribuir](#desarrollo-local)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Propósito](#-propósito)
- [Características Principales](#-características-principales)
- [Tecnologías](#️-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Desarrollo Local](#-desarrollo-local)
- [Próximos Pasos](#-próximos-pasos)
- [Roadmap](#-roadmap)
- [Licencia](#-licencia)

---

## 🎯 Acerca del Proyecto

**Aelityx Research** es una plataforma web especializada en mostrar investigaciones, proyectos y desarrollos en el campo de la Ciencia de Datos, Machine Learning, Business Intelligence y soluciones tecnológicas científicas.

Este repositorio corresponde al sitio de **Investigación y Desarrollo (R&D)** de Aelityx, diseñado para:

- 📊 Mostrar proyectos de investigación y casos de estudio técnicos
- 🧪 Publicaciones científicas y papers
- 🎓 Recursos educativos y divulgación científica
- 🤝 Colaboraciones académicas e industriales
- 💡 Innovaciones y metodologías propias

---

## 🔍 Propósito

### Visión del Proyecto

Este sitio forma parte de una **estrategia dual**:

1. **Sitio Corporativo** (`aelityx.com`) → Enfoque comercial, servicios, conversión de clientes
2. **Sitio de I+D** (`research.aelityx.com` - este repo) → Enfoque técnico-científico, showcase de expertise

### ¿Por qué separar?

- ✅ **Claridad de audiencias**: Clientes empresariales vs. comunidad técnica/académica
- ✅ **Mejor SEO**: Keywords diferenciadas según objetivo
- ✅ **Credibilidad**: Demostrar expertise profundo y rigor científico
- ✅ **Diferenciación competitiva**: Pocas consultoras tienen sección I+D pública
- ✅ **Atracción de talento**: Investigadores valoran la capacidad técnica
- ✅ **Networking académico**: Facilita colaboraciones con universidades

---

## ✨ Características Principales

### Actuales

- 🎨 **Diseño moderno y responsivo** con Dark Mode
- 🎭 **Animaciones suaves** con GSAP y Framer Motion
- 📱 **Mobile-first** adaptable a todos los dispositivos
- 🔐 **Formulario de contacto** con EmailJS y protección anti-spam
- ⚡ **Alto rendimiento** con Vite y optimizaciones
- 🎯 **Navegación inteligente** con detección de sección activa
- 🌓 **Tema claro/oscuro** con persistencia local

### Secciones Implementadas

1. **Hero Section** - Presentación con animación de partículas
2. **Propuesta de Valor** - Filosofía y enfoque
3. **Servicios/Áreas de I+D** - 8 áreas especializadas con modales detallados
4. **Casos de Éxito** - 4 proyectos destacados con métricas
5. **Sección CEO** - Visión del fundador
6. **Contacto** - Formulario funcional con validación
7. **Footer** - Links y redes sociales

---

## 🛠️ Tecnologías

### Core Stack

- **Frontend Framework**: React 18.3 + TypeScript 5.5
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4 + PostCSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM 6.26

### Animaciones y Visualización

- **GSAP 3.13** - Animaciones complejas con ScrollTrigger
- **Framer Motion 12** - Animaciones declarativas
- **Three.js + React Three Fiber** - Gráficos 3D (preparado)

### Formularios y Estado

- **React Hook Form 7.53** + Zod 3.23 - Validación robusta
- **TanStack Query 5.56** - Gestión de estado asíncrono
- **EmailJS 4.4** - Envío de emails sin backend

### Herramientas de Desarrollo

- **ESLint 9** - Linting con TypeScript
- **Autoprefixer** - Compatibilidad CSS cross-browser
- **Lovable Tagger** - Deployment automático

---

## 📁 Estructura del Proyecto

```
aelityx-research/
├── public/                    # Assets estáticos
│   ├── aelityx_blue.svg
│   ├── aelityx_white.svg
│   ├── fonts/                 # Causten custom font
│   └── yo_.jpg                # Foto CEO
├── src/
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── AnimateOnScroll.tsx
│   │   ├── CasesSection.tsx   # Casos de éxito
│   │   ├── CEOSection.tsx     # Visión del fundador
│   │   ├── ContactSection.tsx # Formulario contacto
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx    # Landing principal
│   │   ├── Navbar.tsx         # Navegación
│   │   ├── ProposalSection.tsx
│   │   ├── ServicesSection.tsx # Áreas I+D
│   │   └── TeamSection.tsx
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilidades
│   ├── pages/
│   │   ├── Index.tsx          # Página principal
│   │   └── NotFound.tsx
│   ├── types/                 # TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env                       # Variables de entorno (EmailJS)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ y npm/yarn/pnpm/bun
- Git

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/JehutyDO/aelityx_research.git
cd aelityx_research

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

### Variables de Entorno

Crea un archivo `.env` en la raíz:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

> 📝 Ver `EMAILJS_SETUP.md` para configurar EmailJS

---

## 💻 Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview build de producción
npm run preview

# Linting
npm run lint
```

El servidor de desarrollo estará disponible en `http://localhost:5173`

---

## 🚀 Próximos Pasos

### Fase 1: Limpieza y Optimización (En Progreso)

- [ ] **Convertir Servicios a Acordeones** - Reducir de 8 tarjetas a acordeón limpio
- [ ] **Simplificar Casos de Éxito** - Formato más compacto, menos imágenes pesadas
- [ ] **Optimizar Hero Section** - Eliminar canvas de partículas por algo más ligero
- [ ] **Refactorizar Team Section** - Dejar solo perfil del fundador o eliminar
- [ ] **Compactar CEO Section** - Versión más minimalista
- [ ] **Reducir Propuesta Section** - Texto más conciso

### Fase 2: Contenido I+D

- [ ] Agregar sección **Publicaciones Científicas**
- [ ] Crear **Blog Técnico** con artículos de investigación
- [ ] Implementar **Portfolio de Proyectos** detallado
- [ ] Añadir **Metodologías propias** desarrolladas
- [ ] Sección de **Open Source Contributions**
- [ ] **Recursos descargables** (whitepapers, datasets)

### Fase 3: Funcionalidades Avanzadas

- [ ] Sistema de búsqueda de contenido
- [ ] Filtros por área de investigación
- [ ] Timeline de proyectos
- [ ] Integración con Google Scholar
- [ ] RSS feed para blog
- [ ] Newsletter técnico

### Fase 4: SEO y Analytics

- [ ] Implementar SEO completo (meta tags, sitemap)
- [ ] Google Analytics 4
- [ ] Schema.org markup para investigaciones
- [ ] OpenGraph para redes sociales

---

## 🗺️ Roadmap

### Q1 2025
- ✅ Setup inicial del proyecto
- ✅ Diseño base y componentes
- 🔄 Optimización y limpieza UI/UX
- 📝 Documentación completa

### Q2 2025
- Migración de contenido científico
- Blog técnico funcional
- Sistema de publicaciones
- Primera versión pública

### Q3 2025
- Integraciones académicas
- Sistema de colaboraciones
- Expansión de contenido
- Community features

### Q4 2025
- Versión 2.0 con IA integrada
- Dashboards interactivos
- Visualizaciones avanzadas
- API pública (opcional)

---

## 🎨 Identidad Visual

### Paleta de Colores

```css
--aelityx-blue: #1E88E5    /* Azul principal - tecnología */
--aelityx-green: #4CAF50   /* Verde - crecimiento, IA */
--aelityx-orange: #ff9700  /* Naranja - innovación */
--aelityx-dark: #333333    /* Gris oscuro - profesional */
--aelityx-gray: #8E9196    /* Gris medio - texto secundario */
```

### Tipografías

- **Causten** - Familia custom para headings
- **Poppins** - Cuerpo y textos principales
- **Inter** - UI components

---

## 🤝 Contribuir

Este es un proyecto privado/corporativo, pero si deseas colaborar:

1. Fork el proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: amazing feature'`)
4. Push a la Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Copyright © 2025 Aelityx. Todos los derechos reservados.

Este proyecto es privado y su código es propiedad de Aelityx.

---

## 📞 Contacto

**Aelityx - Data Science & AI Research**

- 🌐 Web: [aelityx.com](https://aelityx.com)
- 📧 Email: info@aelityx.com
- 📱 Teléfono: +52 33 5018 4329
- 📍 Ubicación: Aguascalientes, México

**Dr. Mauricio Rosales Rivera** - Founder & CEO

---

<div align="center">

**[⬆ Volver arriba](#-aelityx-research--development)**

Hecho con ❤️ y ☕ por el equipo de Aelityx

</div>
