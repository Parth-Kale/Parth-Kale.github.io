#!/bin/bash

# Build the project for static export
echo "Building project for static export..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful! Static files are in the 'out' directory."
    echo "You can now deploy these files to GitHub Pages."
    echo ""
    echo "To deploy manually:"
    echo "1. Copy all files from the 'out' directory to your GitHub Pages branch"
    echo "2. Or use the GitHub Actions workflow (recommended)"
    echo ""
    echo "Files are ready in: ./out/"
else
    echo "Build failed! Please check for errors."
    exit 1
fi 