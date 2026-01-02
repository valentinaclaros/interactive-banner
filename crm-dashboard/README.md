# CRM Dashboard - María Macedo

Dashboard profesional de CRM desarrollado con **Next.js 14**, **React 18**, **TypeScript** y **Tailwind CSS**.

## 🚀 Características

- ✅ Layout responsivo con grid de 4 columnas iguales
- ✅ Widgets colapsables con estados (empty, success, warning)
- ✅ Sistema de tarjetas con tabs (Physical, Virtual, Additional)
- ✅ Modal de cancelación de tarjetas con validación
- ✅ Componentes reutilizables y tipados con TypeScript
- ✅ Diseño moderno con Tailwind CSS
- ✅ Fondo púrpura degradado (#6b5a8e)

## 📦 Estructura del Proyecto

```
crm-dashboard/
├── app/
│   ├── globals.css           # Estilos globales y clases Tailwind
│   ├── layout.tsx            # Layout principal de Next.js
│   └── page.tsx              # Página principal con estructura de dashboard
├── components/
│   ├── Header.tsx            # Componente del header con tags y filtros
│   ├── WidgetWrapper.tsx     # Componente wrapper reutilizable para widgets
│   └── widgets/
│       ├── PersonInformation.tsx      # Widget de información personal
│       ├── FraudstersWidget.tsx       # Widget de fraudes
│       ├── CardsWidget.tsx            # Widget de tarjetas (con modal)
│       ├── BillsWidget.tsx            # Widget de facturas
│       ├── CurrentSituationWidget.tsx # Widget de situación actual
│       ├── CollectionHistoryWidget.tsx# Widget de historial
│       ├── FinancingWidget.tsx        # Widget de financiamiento
│       ├── CreditCardWidget.tsx       # Widget de cuenta de tarjeta
│       ├── ChargebacksWidget.tsx      # Widget de chargebacks
│       └── BillsRightWidget.tsx       # Widget de facturas (derecha)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🛠️ Instalación y Uso

### 1. Instalar dependencias

```bash
cd crm-dashboard
npm install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Build para producción

```bash
npm run build
npm start
```

## 🎨 Dimensiones de Widgets

### Distribución en 4 Columnas

**Columna 1**: Person Information  
**Columna 2**: Fraudsters Or Suspects, Cards, Bills  
**Columna 3**: Current Situation, Collection History, Financing  
**Columna 4**: Credit Card Account, Chargebacks, Bills

### Tamaños de Widgets

**Pequeños** (min-height: 180px):
- Fraudsters Or Suspects
- Credit Card Account
- Bills (ambos)

**Medianos** (min-height: 320px):
- Cards
- Current Situation
- Chargebacks

**Variables**:
- Customer Collection History (min-height: 200px)
- Financing (min-height: 200px)

## 🎯 Componentes Clave

### WidgetWrapper
Componente reutilizable que incluye:
- Header con título, iconos y menú
- Contenido colapsable
- Footer con "Rate this widget" y iconos de acción
- Props personalizables (minHeight, footerSource, menuItems)

### CardsWidget
Widget completo con:
- Sistema de tabs (Physical, Virtual, Additional)
- Lista de tarjetas expandibles
- Modal de cancelación con validación
- Estados de tarjetas (activa, cancelada)
- Código de confirmación

### PersonInformation
Widget lateral con:
- Foto de perfil
- Información personal completa
- Caja de alerta azul para dirección
- Campos de texto y selectores

## 🎨 Estilos y Colores

### Colores Principales
- **CRM Purple**: `#6b5a8e`
- **CRM Purple Light**: `#7C6BA6`
- **CRM Purple Dark**: `#6B5B95`

### Clases Tailwind Personalizadas
- `.widget` - Contenedor blanco con sombra
- `.success-box` - Caja verde para mensajes de éxito
- `.info-box` - Caja azul para información
- `.warning-box` - Caja amarilla para advertencias
- `.empty-state` - Estado vacío centrado

## 📱 Responsive Design

El dashboard usa un sistema de columnas flexible:
- **Desktop**: Grid de 4 columnas iguales (25% cada una)
- **Tablet/Mobile**: Las columnas se adaptan automáticamente con grid responsive

## 🔧 Tecnologías

- **Next.js 14** - Framework React con App Router
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de utilidades CSS
- **PostCSS** - Procesamiento CSS

## 📝 Notas

- Todos los widgets son colapsables
- El sistema de tabs funciona completamente
- El modal de cancelación incluye validación de código
- Los componentes son reutilizables y modulares
- El código está completamente tipado con TypeScript

## 🚀 Despliegue

Para desplegar en Vercel:

```bash
npm run build
```

O conecta tu repositorio directamente en [Vercel](https://vercel.com).

---

Desarrollado con ❤️ usando Next.js y Tailwind CSS

