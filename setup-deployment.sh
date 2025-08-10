#!/bin/bash

echo "🚀 Portfolio Deployment Setup"
echo "=============================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from your portfolio directory"
    exit 1
fi

echo "✅ Found portfolio project"

# Get repository name
echo ""
echo "📝 GitHub Repository Setup"
echo "-------------------------"
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter repository name (default: ux-portfolio): " REPO_NAME
REPO_NAME=${REPO_NAME:-ux-portfolio}

echo ""
echo "🔗 Repository will be: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""

# Create repository using GitHub API (if token is available)
if [ -n "$GITHUB_TOKEN" ]; then
    echo "🔑 Using GitHub token to create repository..."
    curl -X POST \
        -H "Authorization: token $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.v3+json" \
        https://api.github.com/user/repos \
        -d "{\"name\":\"$REPO_NAME\",\"description\":\"My UX/Product Design Portfolio - Built with Next.js\",\"private\":false}" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        echo "✅ Repository created successfully!"
    else
        echo "⚠️  Could not create repository automatically. Please create it manually on GitHub.com"
    fi
else
    echo "📋 Please create the repository manually:"
    echo "1. Go to https://github.com/new"
    echo "2. Repository name: $REPO_NAME"
    echo "3. Description: My UX/Product Design Portfolio - Built with Next.js"
    echo "4. Make it Public"
    echo "5. Don't initialize with README, .gitignore, or license"
    echo "6. Click 'Create repository'"
    echo ""
    read -p "Press Enter when you've created the repository..."
fi

# Add remote and push
echo ""
echo "📤 Pushing code to GitHub..."
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Code pushed successfully!"
else
    echo "❌ Failed to push code. Please check your GitHub credentials."
    exit 1
fi

echo ""
echo "🚀 Vercel Deployment Setup"
echo "-------------------------"
echo "1. Go to https://vercel.com/new"
echo "2. Import your GitHub repository: $GITHUB_USERNAME/$REPO_NAME"
echo "3. Framework Preset: Next.js (should auto-detect)"
echo "4. Click 'Deploy'"
echo ""
echo "🎉 Your portfolio will be live at: https://$REPO_NAME.vercel.app"
echo ""
echo "📋 Next steps:"
echo "- Customize your content in data/profile.ts"
echo "- Update case studies in content/case-studies/"
echo "- Add your own images to public/images/"
echo "- Set up a custom domain in Vercel (optional)"
echo ""
echo "✨ Setup complete! Your portfolio is ready to deploy!" 