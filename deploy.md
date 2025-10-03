# Hostinger Deployment Guide

## 🚀 Deployment Steps for Limit Edge Budget App

### 1. **Upload Files to Hostinger**

Upload these files to your Hostinger public_html directory:

```
public_html/
├── .htaccess                    # Apache configuration
├── index.html                   # Main React app entry point
├── static/                      # React build assets
│   ├── css/
│   ├── js/
│   └── media/
└── images/                      # Your app images
```

### 2. **Required Files for Deployment**

#### **A. Copy React Build Files**
```bash
# Copy these from react-app/build/ to your Hostinger public_html/
- index.html
- static/ (entire folder)
- images/ (if you have any)
```

#### **B. .htaccess Configuration**
The `.htaccess` file is already created and handles:
- React Router routing
- SPA (Single Page Application) support
- Proper file serving

### 3. **Backend Deployment (Optional)**

If you want to deploy the backend API separately:

#### **Option A: Deploy Backend to Hostinger VPS**
1. Upload `backend/` folder to your VPS
2. Install Node.js and dependencies
3. Run `npm install` and `npm start`
4. Update React app API URL

#### **Option B: Use External API Service**
- Deploy backend to services like Railway, Render, or Heroku
- Update API URL in React app

### 4. **Environment Configuration**

Create `.env` file in your React app:
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

### 5. **File Structure for Hostinger**

```
public_html/
├── .htaccess
├── index.html
├── static/
│   ├── css/
│   │   └── main.[hash].css
│   └── js/
│       └── main.[hash].js
└── images/
    └── logo.jpg
```

### 6. **Testing Your Deployment**

1. Upload files to Hostinger
2. Visit your domain
3. Check if React app loads
4. Test navigation between pages
5. Verify API connections (if backend is deployed)

### 7. **Troubleshooting**

**If React app doesn't load:**
- Check `.htaccess` file is uploaded
- Verify `index.html` is in root directory
- Check file permissions (644 for files, 755 for directories)

**If routing doesn't work:**
- Ensure `.htaccess` is properly configured
- Check Apache mod_rewrite is enabled
- Verify React Router is set up correctly

### 8. **Production Optimizations**

- Enable gzip compression in `.htaccess`
- Set proper cache headers
- Optimize images
- Use CDN for static assets

## 📁 Files to Upload

1. **From `react-app/build/`:**
   - `index.html`
   - `static/` folder
   - Any other assets

2. **Root level:**
   - `.htaccess` (Apache configuration)

3. **Images:**
   - Copy from `react-app/public/images/` to `public_html/images/`
