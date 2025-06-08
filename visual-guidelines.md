# Visual Guidelines - Slickline Services Website

## Brand Identity
**Company:** Slickline Services (SLS)  
**Industry:** Oil & Gas Field Services  
**Brand Personality:** Professional, Technical, Reliable, Industrial

## Color Palette

### Primary Colors
- **SLS Red:** `#E53E3E` (Primary brand color - vibrant red)
  - Usage: Headers, CTAs, accent elements, navigation active states
  - Alternative codes: `#DC2626`, `#EF4444`
  
- **Industrial White:** `#FFFFFF` 
  - Usage: Text on dark backgrounds, clean sections, card backgrounds
  
- **Carbon Black:** `#1A1A1A`
  - Usage: Primary text, header backgrounds, footer
  - Alternative: `#2D2D2D` for slightly lighter variation

### Secondary Colors
- **Steel Gray:** `#6B7280`
  - Usage: Secondary text, borders, subtle backgrounds
  
- **Light Gray:** `#F9FAFB`
  - Usage: Section backgrounds, card containers
  
- **Medium Gray:** `#E5E7EB`
  - Usage: Dividers, input borders, subtle accents

### Accent Colors
- **Dark Red:** `#B91C1C`
  - Usage: Hover states, active buttons, emphasis
  
- **Oil Black:** `#111827`
  - Usage: Deep backgrounds, high contrast text areas

## Typography

### Font Recommendations
**Primary Font Family:**
- Roboto (Modern, clean, technical)
- Alternative: Open Sans, Lato

**Headings:**
- Font Weight: 700 (Bold) for H1, H2
- Font Weight: 600 (Semi-bold) for H3, H4
- Color: Carbon Black `#1A1A1A` or SLS Red `#E53E3E`

**Body Text:**
- Font Weight: 400 (Regular)
- Font Weight: 500 (Medium) for emphasis
- Color: Carbon Black `#1A1A1A` or Steel Gray `#6B7280`

### Font Sizes (Desktop)
- H1: 48px - 56px (Hero titles)
- H2: 36px - 42px (Section headers)
- H3: 24px - 28px (Subsection headers)
- H4: 18px - 20px (Card titles)
- Body: 16px (Standard text)
- Small: 14px (Captions, metadata)

### Font Sizes (Mobile)
- H1: 32px - 36px
- H2: 28px - 32px
- H3: 20px - 24px
- H4: 16px - 18px
- Body: 16px
- Small: 14px

## Design Elements

### Geometric Shapes
**Diagonal Elements:**
- Inspired by the red diagonal in the brand image
- Use 15-20 degree angles for dynamic sections
- Apply to: Hero backgrounds, section dividers, card accents

**Angular Cuts:**
- Clean, industrial-inspired geometric cuts
- Use for image overlays and section transitions

### Button Styles
**Primary Button:**
- Background: SLS Red `#E53E3E`
- Text: White
- Hover: Dark Red `#B91C1C`
- Padding: 12px 24px
- Border Radius: 4px (subtle rounding)

**Secondary Button:**
- Background: Transparent
- Border: 2px solid SLS Red
- Text: SLS Red
- Hover: Background SLS Red, Text White

**Ghost Button:**
- Background: Transparent
- Text: Steel Gray
- Hover: Light Gray background

## Layout Guidelines

### Grid System
- 12-column grid system
- Container max-width: 1200px
- Gutter: 24px (desktop), 16px (mobile)

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

### Sections
- Section padding: 64px 0 (desktop), 48px 0 (mobile)
- Container padding: 0 24px (desktop), 0 16px (mobile)

## Card Design

### Service Cards
- Background: White
- Border: 1px solid Light Gray `#E5E7EB`
- Border Radius: 8px
- Box Shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
- Padding: 24px
- Hover: Subtle lift with increased shadow

### Equipment Cards
- Image aspect ratio: 4:3 or 16:9
- Overlay: Dark gradient for text readability
- Corner accent: Red diagonal element

## Icons and Graphics

### Icon Style
- Outline style icons (not filled)
- Stroke width: 2px
- Color: Steel Gray or SLS Red
- Size: 24px (standard), 32px (large), 16px (small)

### Image Treatment
- Industrial photography style
- Black and white or desaturated for backgrounds
- Color overlays using brand colors
- High contrast for text readability

## Interactive Elements

### Hover States
- Buttons: Color transition (0.3s ease)
- Cards: Subtle scale (1.02) and shadow increase
- Links: Color change to SLS Red

### Transitions
- Duration: 0.3s for most elements
- Easing: ease-in-out
- Properties: background-color, transform, box-shadow

## Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1200px

## Accessibility
- Color contrast ratio: Minimum 4.5:1 for normal text
- Color contrast ratio: Minimum 3:1 for large text
- Focus states: Visible outline using SLS Red
- Alt text for all images
- Semantic HTML structure

## Brand Application Examples

### Navigation
- Background: White
- Active state: SLS Red underline or background
- Mobile: Hamburger menu with red accent

### Hero Section
- Background: Black and white industrial image
- Red diagonal overlay element
- White text for contrast
- Red CTA button

### Footer
- Background: Carbon Black `#1A1A1A`
- Text: Light Gray
- Links: White with red hover states

## File Organization
```
assets/
├── css/
│   ├── main.css
│   ├── components.css
│   └── utilities.css
├── images/
│   ├── hero/
│   ├── equipment/
│   ├── icons/
│   └── logos/
└── js/
    ├── main.js
    └── components.js
```

## Notes for Implementation
- Maintain consistent use of the red diagonal element throughout
- Ensure industrial, professional aesthetic
- Prioritize readability and technical credibility
- Use white space generously for clean, modern look
- Test color combinations for accessibility compliance 