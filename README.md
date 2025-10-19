# Sabrina's Personal Website

A clean, old-school style personal website featuring four main sections: Home, Projects, Photos, and Roommate.

## Features

- 🏠 **Home Page**: Welcome message and personal introduction
- 💻 **Projects**: Showcase of work and creative endeavors
- 📸 **Photos**: Visual gallery of memories and experiences
- 🏠 **Roommate**: Dedicated section for roommate stories and memories

## Design

- Clean, retro aesthetic with a modern twist
- Responsive design that works on all devices
- Smooth animations and hover effects
- Old-school typography using Courier New font
- Gradient backgrounds and subtle shadows

## Files Structure

```
personal_website/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Deploy on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `sabrina-personal-website` or `sabrina.github.io`)
4. Make sure it's set to **Public** (required for free GitHub Pages)
5. Don't initialize with README, .gitignore, or license (we already have files)
6. Click "Create repository"

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your files (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Add a commit message like "Initial website upload"
4. Click "Commit changes"

#### Option B: Using Git Command Line
```bash
# Navigate to your project folder
cd /Users/lukuanyi/Documents/sabrina/personal_website

# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial website upload"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab (at the top of the repository)
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Access Your Website

- GitHub will provide you with a URL like: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- If you named your repository `YOUR_USERNAME.github.io`, your site will be at: `https://YOUR_USERNAME.github.io`
- It may take a few minutes for the site to be available

## Customization

### Adding Real Images
1. Create an `images` folder in your repository
2. Upload your photos to this folder
3. Replace the placeholder divs with actual `<img>` tags:
   ```html
   <img src="images/your-photo.jpg" alt="Description" class="real-image">
   ```

### Updating Content
- Edit `index.html` to change text content
- Modify `styles.css` to adjust colors, fonts, and layout
- Update `script.js` to add new interactive features

### Adding More Pages
1. Create new HTML files for additional pages
2. Update the navigation in `index.html`
3. Add corresponding CSS and JavaScript as needed

## Tips for Success

- **Keep it simple**: The old-school aesthetic works best with clean, minimal design
- **Test on mobile**: Make sure your site looks good on phones and tablets
- **Optimize images**: Compress photos before uploading to keep load times fast
- **Regular updates**: Keep your content fresh and engaging
- **Backup your work**: Always keep a local copy of your files

## Troubleshooting

### Site Not Loading
- Check that your repository is public
- Verify that GitHub Pages is enabled in settings
- Wait 5-10 minutes for changes to propagate
- Check the URL format matches your repository name

### Images Not Showing
- Ensure image files are uploaded to your repository
- Check file paths are correct (case-sensitive)
- Verify image file formats are web-compatible (JPG, PNG, GIF)

### Styling Issues
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check for typos in CSS class names
- Verify all CSS files are properly linked

## Support

If you run into any issues:
1. Check the GitHub Pages documentation
2. Look at the repository's "Actions" tab for build errors
3. Verify all file names and paths are correct
4. Make sure your HTML is valid

Happy coding! 🚀
