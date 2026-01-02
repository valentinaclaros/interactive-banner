# Design Guidelines - Nubank Style Banners

## 🎨 Paleta de Colores

### Colores Principales
- **Morado Principal**: `#8A6BBE`
- **Morado Secundario**: `#B19CD9`
- **Morado Suave**: `#9B7EDE`

### Colores de Fondo
- **Fondo Principal**: `white`
- **Fondo de Tarjetas**: `linear-gradient(135deg, #F8F9FF, #FFFFFF)`
- **Fondo de Avisos**: `linear-gradient(135deg, #F0F4FF, #F8FAFF)`

### Colores de Texto
- **Títulos**: `#8A6BBE` (con gradiente)
- **Subtítulos**: `#555`
- **Texto Secundario**: `#666`

### Bordes y Líneas
- **Bordes Suaves**: `rgba(139, 123, 190, 0.1)`
- **Bordes Destacados**: `rgba(139, 123, 190, 0.2)`

## 📝 Tipografía

### Fuente Principal
- **Familia**: `'Poppins', sans-serif`
- **Pesos**: 400 (normal), 600 (semi-bold), 700 (bold)

### Tamaños de Texto
- **Títulos Principales**: `1.6rem` (desktop) / `1.4rem` (mobile)
- **Títulos de Sección**: `0.85rem`
- **Texto Normal**: `0.9rem`
- **Texto Pequeño**: `0.8rem`

### Line Height
- **Texto Normal**: `1.6`
- **Texto Compacto**: `1.4`

## 📐 Espaciado y Layout

### Contenedores
- **Max-width**: `1600px`
- **Padding Principal**: `20px`
- **Padding Compacto**: `12px`
- **Margin entre elementos**: `15px`

### Grid System
- **Desktop**: 3 columnas (`1fr 1fr 1fr`)
- **Tablet**: 2 columnas (`1fr 1fr`)
- **Mobile**: 1 columna (`1fr`)
- **Gap**: `20px` (desktop) / `15px` (mobile)

### Tarjetas
- **Padding**: `10px`
- **Border-radius**: `8px`
- **Min-height**: `50px`
- **Margin entre tarjetas**: `6px`

## 🎯 Componentes

### Banner Inicial
- **Estructura**: Título + Descripción + Tags
- **Alineación**: Centrado
- **Tags**: Pill shape con hover effects
- **Ancho máximo descripción**: `800px`

### Tarjetas de Información
- **Fondo**: Gradiente morado suave
- **Borde**: Sutil con transparencia
- **Contenido**: Título + Descripción
- **Altura**: Uniforme (min-height)

### Tags de Métricas
- **Forma**: Pill (border-radius: 20px)
- **Padding**: `8px 16px`
- **Hover**: Cambio de color y elevación
- **Gap**: `15px`

## 📱 Responsive Design

### Breakpoints
- **Desktop**: `> 1200px`
- **Tablet**: `768px - 1200px`
- **Mobile**: `< 768px`

### Adaptaciones Mobile
- **Títulos**: Reducir 0.2rem
- **Padding**: Reducir 25%
- **Grid**: Cambiar a 1 columna
- **Tags**: Padding reducido

## ✨ Efectos Visuales

### Gradientes
- **Títulos**: `linear-gradient(135deg, #8A6BBE, #B19CD9)`
- **Fondos**: `linear-gradient(135deg, #F8F9FF, #FFFFFF)`

### Transiciones
- **Hover**: `all 0.2s ease`
- **Transform**: `translateY(-2px)`

### Sombras
- **Contenedores**: `0 2px 8px rgba(139, 123, 190, 0.1)`

## 🚫 Evitar

- **Colores verdes**: No usar en metodología
- **Fuentes monospace**: Usar Poppins siempre
- **Bordes duros**: Siempre con transparencia
- **Espaciado inconsistente**: Seguir la escala definida
- **Alturas variables**: Usar min-height uniforme

## ✅ Mejores Prácticas

1. **Consistencia**: Mismo estilo en todos los elementos
2. **Compacidad**: Optimizar altura sin sacrificar legibilidad
3. **Centrado**: Elementos principales centrados
4. **Hover effects**: Interactividad sutil
5. **Responsive**: Adaptación fluida a todos los tamaños
6. **Branding**: Mantener colores Nubank en todo momento

---

## 📦 Implementación

### Fuentes
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

### CSS Base
```css
body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #8A6BBE, #B19CD9);
}
```

### Componente de Tarjeta
```css
.card {
    background: linear-gradient(135deg, #F8F9FF, #FFFFFF);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(139, 123, 190, 0.1);
    border: 1px solid rgba(139, 123, 190, 0.1);
    padding: 10px;
    min-height: 50px;
    transition: all 0.2s ease;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 123, 190, 0.2);
}
```

### Título con Gradiente
```css
.title {
    font-size: 0.85rem;
    font-weight: 600;
    background: linear-gradient(135deg, #8A6BBE, #B19CD9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

### Tag/Pill
```css
.tag {
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    background: linear-gradient(135deg, #8A6BBE, #B19CD9);
    color: white;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(139, 123, 190, 0.1);
}

.tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 123, 190, 0.2);
}
```

---

**Aplicado en**: `index-shuffle.html`  
**Fecha**: Diciembre 2025  
**Versión**: 1.0

