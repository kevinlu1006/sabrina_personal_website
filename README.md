# Sabrina's Personal Website

A charming personal website for Sabrina, a domestic shorthair tabby cat from Indiana now living in Pittsburgh, Pennsylvania. Features four main sections showcasing her personality, interests, photos, and her roommate Kevin's professional information.

## Features

- 🏠 **Home Page**: Welcome message and personal introduction from Sabrina
- 🎯 **Interests**: Sabrina's hobbies including basketball, running, and wine & beer
- 📸 **Photos**: Visual gallery of Sabrina's travel adventures and memories
- 👨‍💻 **Roommate**: Kevin's detailed resume and professional background
- ☕ **Donation Support**: Buy Me a Coffee integration for supporting Sabrina's adventures
- 🤖 **Interactive Chat**: Chat with SabrinaBot for a fun interactive experience

## Design

- Modern, clean aesthetic with a personal touch
- Responsive design that works on all devices
- Smooth animations and hover effects
- Professional typography using Inter font
- Beautiful gradient backgrounds and subtle shadows
- Cat-themed personality throughout

## Files Structure

```
personal_website_sab/
├── index.html          # Main HTML file with all content
├── styles.css          # CSS styling with Inter font and responsive design
├── script.js           # JavaScript functionality including chatbot
├── images/             # Image assets
│   ├── home_page.jpeg
│   ├── photo_page_pic1.png - photo_page_pic6.png
│   ├── photo_page.png
│   ├── project_page.png
│   ├── roommate_page_pic.png
│   └── roomate_pic.jpg
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

### Updating Content
- Edit `index.html` to change text content and add new sections
- Modify `styles.css` to adjust colors, fonts, and layout
- Update `script.js` to add new interactive features or modify the chatbot

### Adding More Images
1. Add new photos to the `images` folder
2. Update the photo grid in the Photos section:
   ```html
   <div class="photo-item">
       <img src="images/your-new-photo.png" alt="Description" class="grid-photo">
   </div>
   ```

### Customizing the Donation Button
- Update the Buy Me a Coffee link in `index.html`:
  ```html
  <a href="https://buymeacoffee.com/YOUR_USERNAME" target="_blank" class="bmc-btn">
  ```

### Adding More Sections
1. Add new tab buttons in the navigation
2. Create corresponding tab content divs
3. Update the JavaScript tab switching functionality

## Tips for Success

- **Keep it personal**: The cat-themed personality makes the site unique and memorable
- **Test on mobile**: Make sure your site looks good on phones and tablets
- **Optimize images**: Compress photos before uploading to keep load times fast
- **Regular updates**: Keep your content fresh and engaging
- **Backup your work**: Always keep a local copy of your files
- **Update the donation link**: Make sure your Buy Me a Coffee username is correct

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
