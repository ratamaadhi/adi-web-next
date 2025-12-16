# 📋 Audit & Rencana Integrasi shadcnUI

## 🎯 Overview

Dokumen ini berisi hasil audit komprehensif dan rencana implementasi untuk integrasi shadcnUI ke dalam proyek Next.js yang sudah ada.

## 🔍 Hasil Audit

### 🔴 **PRIORITAS TINGGI - Konflik Kritis**

#### 1. Konflik Nama Komponen Modal

- **Masalah**: Komponen `Modal.js` di `/components/modal/` akan bentrok dengan shadcnUI `Dialog/Modal`
- **Lokasi**: `/components/modal/AppModal.js`
- **Dampak**: Import error dan naming collision
- **Solusi**: Rename `Modal` → `AppModal` atau `CustomModal` sebelum instalasi shadcn

#### 2. Versi React yang Tidak Konsisten

- **Masalah**: Package.json menunjukkan React 18.2.0, yarn list menunjukkan React 18.3.1
- **Lokasi**: `package.json:29-30`
- **Dampak**: Potensi peer dependency conflicts dengan shadcnUI
- **Solusi**: Sinkronkan versi React ke 18.3.1 di package.json

#### 3. Konfigurasi Tailwind Mode yang Usang

- **Masalah**: Menggunakan `mode: 'jit'` yang sudah deprecated di Tailwind v3+
- **Lokasi**: `tailwind.config.js:2`
- **Dampak**: Build performance issues dan warning messages
- **Solusi**: Hapus `mode: 'jit'` dari tailwind.config.js

### 🟡 **PRIORITAS SEDANG - Potensi Masalah**

#### 4. Konflik Styling Form

- **Masalah**: Custom floating label inputs vs shadcn standard inputs
- **Lokasi**: `/components/form/FormContactMe.js`
- **Dampak**: Inconsistent UI patterns
- **Solusi**: Migrasi bertahap ke shadcn form components

#### 5. Dependencies Overlap

- **Masalah**: Sudah menggunakan `@headlessui/react` untuk modal/dialog
- **Lokasi**: `package.json:17`
- **Dampak**: Duplicate functionality dengan Radix UI (shadcn base)
- **Solusi**: Pertimbangkan menghapus Headless UI setelah migrasi

#### 6. Custom Color System

- **Masalah**: Custom colors (`primary`, `secondary`, `tertiary`) vs shadcn color variables
- **Lokasi**: `tailwind.config.js:20-24`, `styles/global.css:5-18`
- **Dampak**: Perlu mapping color system
- **Solusi**: Extend shadcn theme dengan custom colors

### 🟢 **PRIORITAS RENDAH - Minim Konflik**

#### 7. Component Naming Patterns

- **Masalah**: `ProjectCard` vs shadcn `Card`
- **Lokasi**: `/components/cards/projectCard.js`
- **Solusi**: Keep domain-specific names, refactor to use shadcn Card as base

#### 8. ESLint Configuration

- **Masalah**: ESLint config perlu update untuk TypeScript support
- **Lokasi**: `.eslintrc.json`
- **Solusi**: Add TypeScript ESLint rules

## 📊 Current Project Stack

### Dependencies

- **Next.js**: 15.4.6 (latest)
- **React**: 18.3.1 (inconsistent in package.json)
- **Tailwind CSS**: 3.4.17
- **Node.js**: 22.19.0
- **Package Manager**: Yarn 1.22.22

### Existing UI Libraries

- `@headlessui/react` - Modal/Dialog components
- `@tailwindcss/forms` - Form styling
- `@tailwindcss/typography` - Typography utilities
- `framer-motion` - Animations

### Custom Design System

```css
/* Custom Colors */
primary: '#202226'    /* Dark background */
secondary: '#E1E1E6'  /* Light text */
tertiary: '#3E3E40'   /* Medium gray */

/* Custom Effects */
.glassmorph - Glassmorphism effect
.no-glassmorph - Reset glassmorphism
```

## 🚀 Rencana Implementasi

### Phase 1: Persiapan (Wajib)

> **Status**: ⏳ Pending
> **Estimasi**: 30 menit

#### Checklist:

- [ ] Rename `Modal.js` → `AppModal.js`
- [ ] Update semua import Modal ke AppModal
- [ ] Sinkronkan versi React di package.json ke 18.3.1
- [ ] Hapus `mode: 'jit'` dari tailwind.config.js
- [ ] Backup current state

#### Commands:

```bash
# Rename modal component
mv components/modal/Modal.js components/modal/AppModal.js

# Update imports (manual)
grep -r "import.*Modal" components/ pages/ --include="*.js" --include="*.jsx"

# Update React version
yarn add react@18.3.1 react-dom@18.3.1
```

### Phase 2: Konfigurasi shadcn

> **Status**: ⏳ Pending
> **Estimasi**: 45 menit

#### Checklist:

- [ ] Install shadcn CLI
- [ ] Jalankan init command
- [ ] Configure components.json
- [ ] Setup custom color theme
- [ ] Test basic component installation

#### Commands:

```bash
# Install shadcn CLI
yarn add shadcn@latest

# Initialize shadcn
npx shadcn@latest init

# Configure components.json
# Custom colors mapping
```

#### Expected components.json structure:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "styles/global.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### Phase 3: Migrasi Bertahap

> **Status**: ⏳ Pending
> **Estimasi**: 2-3 jam

#### 3.1 Install Komponen Dasar

```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add card
npx shadcn@latest add dialog
```

#### 3.2 Migrasi Form Components

- [ ] Refactor `FormContactMe.js` menggunakan shadcn components
- [ ] Preserve existing styling dengan custom theme
- [ ] Test form functionality

#### 3.3 Migrasi Modal/Dialog

- [ ] Evaluasi shadcn Dialog vs current AppModal
- [ ] Migrasi jika beneficial
- [ ] Update glassmorphism styling

#### 3.4 Migrasi Card Components

- [ ] Refactor `ProjectCard.js` menggunakan shadcn Card
- [ ] Preserve custom layout dan image handling
- [ ] Maintain hover effects

### Phase 4: Cleanup & Optimization

> **Status**: ⏳ Pending
> **Estimasi**: 1 jam

#### Checklist:

- [ ] Remove unused dependencies (`@headlessui/react`)
- [ ] Update ESLint configuration
- [ ] Optimize bundle size
- [ ] Test all components functionality
- [ ] Update documentation

## ⚠️ Peringatan & Catatan

### Critical Warnings

1. **Jangan install shadcn sebelum Phase 1 selesai** - akan menyebabkan naming conflicts
2. **Backup sebelum migrasi** - untuk rollback jika needed
3. **Test setiap phase** - jangan lanjut jika ada error

### Compatibility Notes

- **Yarn vs npm**: Proyek menggunakan yarn, gunakan yarn untuk semua instalasi
- **Next.js 15.4.6**: Versi terbaru, kompatibel dengan shadcn
- **TypeScript**: Proyek belum menggunakan TypeScript, shadcn lebih optimal dengan TS

### Customization Strategy

- **Preserve glassmorphism effect** melalui custom CSS
- **Maintain color scheme** dengan shadcn theming
- **Keep domain-specific component names** (ProjectCard, TopNav, dll)

## 📈 Expected Benefits

### Short-term

- ✅ Consistent component API
- ✅ Better accessibility
- ✅ Modern design patterns

### Long-term

- 🚀 Faster development
- 🎨 Better design consistency
- 🔧 Easier maintenance
- 📱 Better mobile responsiveness

## 🔄 Rollback Plan

Jika integrasi gagal:

1. Git checkout ke commit sebelum migrasi
2. Restore package.json dari backup
3. Remove shadcn dependencies
4. Test original functionality

## 📝 Progress Tracking

| Phase                | Status     | Completion | Notes         |
| -------------------- | ---------- | ---------- | ------------- |
| Phase 1: Persiapan   | ⏳ Pending | 0%         | Critical path |
| Phase 2: Konfigurasi | ⏳ Pending | 0%         | Dependencies  |
| Phase 3: Migrasi     | ⏳ Pending | 0%         | Core work     |
| Phase 4: Cleanup     | ⏳ Pending | 0%         | Optimization  |

## 📚 Referensi

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS v3 Migration](https://tailwindcss.com/docs/upgrade-guide)
- [Next.js 15 Release Notes](https://nextjs.org/blog/next-15)

---

**Last Updated**: 2025-12-16  
**Author**: AI Assistant  
**Version**: 1.0
