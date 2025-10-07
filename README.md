# Helios - Premium Boat Marketplace

A modern, responsive website for a premium boat marketplace built with Next.js 15, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern Tech Stack** - Next.js 15, TypeScript, Tailwind CSS v4
- **Component-Based Architecture** - Reusable UI components
- **Type Safety** - Full TypeScript support with custom types
- **Clean Code Structure** - Organized data files and utilities
- **Accessibility** - ARIA labels and keyboard navigation
- **Performance Optimized** - Fast loading and smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Custom SVG icons
- **Font**: Inter (system font stack)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Icons.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── BoatsSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── Footer.tsx
│   ├── data/                   # Data files
│   │   ├── navigation.ts
│   │   ├── boats.ts
│   │   └── content.ts
│   ├── types/                  # TypeScript types
│   │   └── index.ts
│   ├── lib/                    # Utilities
│   │   └── utils.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Slate (#64748b)
- **Accent**: Sky Blue (#0ea5e9)
- **Success**: Green (#10b981)
- **Error**: Red (#ef4444)
- **Warning**: Amber (#f59e0b)

### Typography
- **Display**: 3rem, bold, -0.02em letter-spacing
- **H1**: 2.5rem, bold, -0.02em letter-spacing
- **H2**: 2rem, semibold, -0.01em letter-spacing
- **Body**: 1rem, regular, 1.6 line-height
- **Body Large**: 1.25rem, regular, 1.5 line-height

### Spacing
- **Container**: Max-width 1200px with responsive padding
- **Sections**: 16-24 vertical padding (responsive)
- **Components**: 4-8px internal spacing

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd helios
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Header
- Responsive navigation with mobile menu
- Logo with hover effects
- CTA button
- Smooth animations

### Hero Section
- Full-screen hero with background
- Responsive typography
- Call-to-action buttons
- Statistics display
- Scroll indicator

### Boats Section
- Grid layout (1-4 columns based on screen size)
- Boat cards with hover effects
- Feature lists with icons
- Condition badges
- Responsive images

### About Section
- Two-column layout (mobile: stacked)
- Feature highlights with icons
- Floating statistics
- Responsive images

### Footer
- Multi-column layout
- Social media links
- Organized link groups
- Responsive design

## 🔧 Customization

### Adding New Boats
Edit `src/app/data/boats.ts` to add new boat entries:

```typescript
{
  id: 7,
  name: 'New Boat Model',
  type: 'Yacht',
  price: '$500,000',
  length: '50 ft',
  capacity: '12 guests',
  image: '/path/to/image.jpg',
  features: ['Feature 1', 'Feature 2'],
  description: 'Boat description',
  year: 2024,
  condition: 'new',
}
```

### Updating Content
Edit the respective files in `src/app/data/`:
- `navigation.ts` - Navigation items and footer links
- `content.ts` - Hero and about section content
- `boats.ts` - Boat listings

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes
- Design system: CSS custom properties in `:root`

## 📱 Mobile Optimization

- Touch-friendly buttons (44px minimum)
- Readable typography (16px minimum)
- Optimized images and icons
- Smooth scrolling and animations
- Accessible navigation

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- High contrast ratios

## 🚀 Performance

- Optimized images and icons
- Minimal JavaScript bundle
- CSS optimization with Tailwind
- Fast loading with Next.js 15
- Turbopack for faster development

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact the development team.

---

Built with ❤️ for boat lovers