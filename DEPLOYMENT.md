# Deployment Guide: GitHub + Vercel

This guide will walk you through deploying your dental clinic website to Vercel using GitHub.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., "dental-clinic")
4. Choose "Public" or "Private"
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push Code to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: BrightSmile Dental Clinic website"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Note**: Replace `YOUR_USERNAME` with your GitHub username and `REPO_NAME` with your repository name.

## Step 3: Deploy to Vercel

### Method A: Vercel Dashboard (Easiest)

1. Go to [Vercel](https://vercel.com) and sign up/sign in
2. Click "Add New Project"
3. Click "Import Git Repository"
4. Select your GitHub repository
5. Vercel will automatically detect Next.js settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
6. Click "Deploy"
7. Wait 1-2 minutes for deployment
8. Your site will be live at `https://your-project-name.vercel.app`

### Method B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follow the prompts)
vercel

# For production deployment
vercel --prod
```

## Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for SSL certificate (automatic)

## Troubleshooting

### Build Fails

If the build fails:

1. Check the build logs in Vercel
2. Ensure all dependencies are in `package.json`
3. Try building locally: `npm run build`
4. Check for TypeScript errors

### Environment Variables

If you need environment variables:

1. Go to Project Settings > Environment Variables
2. Add your variables
3. Redeploy

### Update Deployed Site

To update your site after making changes:

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push

# Vercel will automatically redeploy
```

## Performance Optimization

Your site is already optimized with:

- ✅ Next.js automatic code splitting
- ✅ Image optimization ready
- ✅ Tailwind CSS purging unused styles
- ✅ Server-side rendering
- ✅ Static generation where possible

## Monitoring

- View analytics in Vercel dashboard
- Monitor performance with Vercel Speed Insights (free tier)
- Check deployment logs for errors

## Next Steps

1. ✅ Add real images to `/public` folder
2. ✅ Update clinic information in `app/page.tsx`
3. ✅ Set up Google Analytics (optional)
4. ✅ Configure custom domain
5. ✅ Test on mobile devices
6. ✅ Add favicon (place in `/app` folder as `favicon.ico`)

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Help](https://docs.github.com)

---

🎉 Congratulations! Your dental clinic website is now live!
