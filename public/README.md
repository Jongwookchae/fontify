# Public Assets for Farcaster Mini App

This folder contains public assets needed for the Farcaster Mini App publishing.

## Required Images

Please add the following image files to this `public/` folder:

### 1. **icon.png** (Required)
- **Size**: 512x512px
- **Format**: PNG
- **Purpose**: App icon shown in Farcaster clients
- **Design**: Should represent Fontify brand (sparkles/font icon)

### 2. **splash.png** (Required)
- **Size**: 1200x1200px or larger
- **Format**: PNG
- **Purpose**: Splash screen shown while app loads
- **Background**: Use #8B5CF6 (purple) as set in farcaster.json

### 3. **og-image.png** (Required)
- **Size**: 1200x630px
- **Format**: PNG
- **Purpose**: Open Graph image for social sharing
- **Content**: Should include:
  - Fontify logo/name
  - "Fonts for Everyone" tagline
  - Visual example of font styles

### 4. **screenshot1.png** (Optional but recommended)
- **Size**: 750x1334px (portrait)
- **Format**: PNG
- **Purpose**: App store screenshot #1
- **Content**: Show text input interface

### 5. **screenshot2.png** (Optional but recommended)
- **Size**: 750x1334px (portrait)
- **Format**: PNG
- **Purpose**: App store screenshot #2
- **Content**: Show font style selection

### 6. **screenshot3.png** (Optional but recommended)
- **Size**: 750x1334px (portrait)
- **Format**: PNG
- **Purpose**: App store screenshot #3
- **Content**: Show preview and sharing features

## After Adding Images

1. Update URLs in `public/.well-known/farcaster.json`
2. Replace `your-domain.com` with your actual domain
3. Test locally: `http://localhost:3000/.well-known/farcaster.json`
4. Deploy to production

## Quick Design Tips

- Use consistent brand colors (purple #8B5CF6, pink #EC4899)
- Keep designs simple and recognizable
- Ensure text is readable at small sizes
- Use high-quality images (no pixelation)
- Optimize file sizes (use PNG compression)

## Tools You Can Use

- [Figma](https://figma.com) - Design tool
- [Canva](https://canva.com) - Easy design tool
- [TinyPNG](https://tinypng.com) - Image compression
- [Squoosh](https://squoosh.app) - Image optimization

