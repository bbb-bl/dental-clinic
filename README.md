# BrightSmile Dental Clinic Website

A modern, professional dental clinic website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design
- 🦷 Comprehensive service listings
- 💰 Transparent pricing information
- 📍 Location and contact information
- 📱 Mobile-friendly interface
- 🎨 Smooth animations and transitions
- ♿ Accessible design

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/dental-clinic.git
cd dental-clinic
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dental-clinic.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

## Project Structure

```
dental-clinic/
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main homepage
├── public/               # Static assets (add images here)
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Customization

### Update Clinic Information

Edit the following in `app/page.tsx`:

- **Clinic Name**: Search for "BrightSmile" and replace
- **Address**: Update the location section
- **Phone Numbers**: Update contact information
- **Prices**: Modify the `priceList` array
- **Services**: Adjust the `treatments` array

### Change Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'dental-blue': '#0A4D68',    // Primary color
  'dental-light': '#088395',   // Secondary color
  'dental-accent': '#05BFDB',  // Accent color
  'dental-cream': '#F8F9FA',   // Background
}
```

### Add Real Images

1. Place images in the `public` folder
2. Update image references in `app/page.tsx`

## Environment Variables

No environment variables are required for basic deployment.

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ using Next.js
