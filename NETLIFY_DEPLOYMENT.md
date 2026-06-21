# Netlify Deployment Guide

## Prerequisites
- Netlify account (sign up at [netlify.com](https://netlify.com))
- GitHub repository with your code pushed

## Setup Steps

### 1. Connect Repository to Netlify
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"New site from Git"**
3. Select your Git provider (GitHub, GitLab, Bitbucket)
4. Authorize and select your repository
5. Click **Deploy site**

### 2. Configure Environment Variables
In your Netlify dashboard:
1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **Edit variables**
3. Add the following environment variables:
   - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
   - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
   - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID

### 3. Verify Build Configuration
The `netlify.toml` file already contains:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirect rules for client-side routing (SPA)
- Node version: 18

### 4. Automatic Deployments
- Any push to the main branch will automatically trigger a new deployment
- Preview deployments are created for pull requests
- Deploy logs are available in the Netlify dashboard

## Troubleshooting

### Build fails
- Check build logs in Netlify dashboard
- Ensure all environment variables are set
- Run `npm run build` locally to test

### Site returns 404 for routes
- The `_redirects` file in the `public/` folder handles SPA routing
- Netlify should automatically serve `/index.html` for missing routes

### Environment variables not working
- Verify variables are set in Netlify dashboard
- Environment variables must start with `VITE_` to be exposed to the browser in Vite
- Redeploy site after adding environment variables

## Local Testing

To preview the production build locally:
```bash
npm run build
npm run preview
```

## Support
- [Netlify Docs](https://docs.netlify.com)
- [Vite Guide](https://vitejs.dev)
