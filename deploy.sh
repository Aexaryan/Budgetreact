#!/bin/bash

# Limit Edge Budget - Deployment Script for Hostinger
echo "🚀 Preparing Limit Edge Budget for Hostinger deployment..."

# Create deployment directory
mkdir -p deployment

# Copy React build files
echo "📦 Copying React build files..."
cp -r react-app/build/* deployment/

# Copy .htaccess for Apache configuration
echo "⚙️ Copying Apache configuration..."
cp .htaccess deployment/

# Copy images if they exist
if [ -d "react-app/public/images" ]; then
    echo "🖼️ Copying images..."
    cp -r react-app/public/images deployment/
fi

# Create deployment info
echo "📋 Creating deployment info..."
cat > deployment/DEPLOYMENT_INFO.txt << EOF
Limit Edge Budget - Deployment Package
=====================================

Files included:
- index.html (React app entry point)
- static/ (CSS, JS, and other assets)
- .htaccess (Apache configuration for SPA routing)
- images/ (App images and media)

Upload Instructions:
1. Upload all files to your Hostinger public_html directory
2. Ensure .htaccess is in the root directory
3. Verify file permissions (644 for files, 755 for directories)
4. Test your domain to ensure the React app loads

Backend API:
- If you need the backend API, deploy it separately
- Update REACT_APP_API_URL in your environment
- Or use the backend server.js for API endpoints

Troubleshooting:
- Check .htaccess is uploaded and working
- Verify index.html is in root directory
- Test React Router navigation
- Check browser console for errors
EOF

echo "✅ Deployment package ready in 'deployment/' directory"
echo "📁 Upload the contents of 'deployment/' to your Hostinger public_html folder"
echo ""
echo "🎯 Next steps:"
echo "1. Upload all files from deployment/ to Hostinger public_html/"
echo "2. Visit your domain to test the app"
echo "3. Check that React Router navigation works"
echo ""
echo "📖 See deploy.md for detailed instructions"
