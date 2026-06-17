# SAKA Photography Website - Vercel Deployment Guide

## Overview
This is a React + TypeScript + Vite website built for SAKA Photography. It's ready for deployment on Vercel.

## Prerequisites
- GitHub account with this repository
- Vercel account (free tier available at [vercel.com](https://vercel.com))
- EmailJS account for contact form functionality

## Deployment Steps

### 1. Deploy to Vercel (Easy)

**Option A: Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Select this repository
5. Click "Deploy"
6. Wait for deployment to complete

**Option B: Using Vercel CLI**
```bash
npm install -g vercel
vercel
```

### 2. Configure Environment Variables

After deployment, add these environment variables in Vercel:

1. Go to **Project Settings** → **Environment Variables**
2. Add these three variables:

```
VITE_EMAILJS_PUBLIC_KEY = [your public key from emailjs.com]
VITE_EMAILJS_SERVICE_ID = [your service id from emailjs.com]
VITE_EMAILJS_TEMPLATE_ID = [your template id from emailjs.com]
```

### 3. Get EmailJS Credentials

1. Go to [emailjs.com](https://emailjs.com)
2. Sign up (free)
3. **Get Public Key:**
   - Click "Account" → Copy "Public Key"

4. **Create Email Service:**
   - Click "Email Services"
   - Connect Gmail/Outlook
   - Copy "Service ID"

5. **Create Email Template:**
   - Click "Email Templates"
   - Create a new template with these variables:
     ```
     {{from_name}} ({{from_email}})
     {{partner_name}}
     {{wedding_date}}
     {{package}}
     {{venue}}
     {{message}}
     ```
   - Copy "Template ID"

### 4. Redeploy After Setting Environment Variables

1. In Vercel, go to **Deployments**
2. Click the latest deployment
3. Click **Redeploy**
4. Choose **Use existing Environment Variables**

## Tech Stack
- **Frontend:** React 19, TypeScript, Vite
- **Styling:** CSS (CSS Variables)
- **Animations:** Framer Motion
- **Routing:** React Router v7
- **Email:** EmailJS
- **Hosting:** Vercel

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure
```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── pages/
│   ├── Home.tsx
│   ├── Work.tsx
│   ├── Offerings.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Features
✅ Responsive Design
✅ Smooth Animations (Framer Motion)
✅ Contact Form with EmailJS
✅ WhatsApp Direct Chat Button
✅ Portfolio Gallery
✅ SEO Optimized
✅ Fast Load Times (Vite)

## Support
For issues or questions, check:
- [Vercel Docs](https://vercel.com/docs)
- [EmailJS Docs](https://www.emailjs.com/docs)
- [React Docs](https://react.dev)

## License
© 2026 Sakshmina Dinushan Photography. All rights reserved.
