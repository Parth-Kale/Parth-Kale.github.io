# Build the project for static export
Write-Host "Building project for static export..." -ForegroundColor Green
npm run build

# Check if build was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful! Static files are in the 'out' directory." -ForegroundColor Green
    Write-Host "You can now deploy these files to GitHub Pages." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "To deploy manually:" -ForegroundColor Cyan
    Write-Host "1. Copy all files from the 'out' directory to your GitHub Pages branch" -ForegroundColor White
    Write-Host "2. Or use the GitHub Actions workflow (recommended)" -ForegroundColor White
    Write-Host ""
    Write-Host "Files are ready in: ./out/" -ForegroundColor Green
} else {
    Write-Host "Build failed! Please check for errors." -ForegroundColor Red
    exit 1
} 