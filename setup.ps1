# MERN Portfolio Setup Script
# Run this script to set up the entire project

Write-Host "🚀 MERN Portfolio - Automated Setup" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js is installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install it from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check MongoDB
Write-Host ""
Write-Host "Checking MongoDB installation..." -ForegroundColor Yellow
try {
    $null = (mongod --version 2>$null)
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ MongoDB is installed" -ForegroundColor Green
    }
} catch {
    Write-Host "⚠️  MongoDB not found. Please install from https://www.mongodb.com/try/download/community" -ForegroundColor Yellow
}

# Install server dependencies
Write-Host ""
Write-Host "📦 Installing server dependencies..." -ForegroundColor Yellow
Set-Location server
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Server dependencies installed" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install server dependencies" -ForegroundColor Red
    exit 1
}

# Install client dependencies
Write-Host ""
Write-Host "📦 Installing client dependencies..." -ForegroundColor Yellow
Set-Location ../client
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Client dependencies installed" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install client dependencies" -ForegroundColor Red
    exit 1
}

Set-Location ..

Write-Host ""
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Make sure MongoDB is running" -ForegroundColor White
Write-Host "   Command: net start MongoDB" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Seed the database:" -ForegroundColor White
Write-Host "   cd server" -ForegroundColor Gray
Write-Host "   npm run seed" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Start the development servers:" -ForegroundColor White
Write-Host "   Backend:  cd server && npm run dev" -ForegroundColor Gray
Write-Host "   Frontend: cd client && npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Open browser: http://localhost:5173" -ForegroundColor White
Write-Host ""
Write-Host "📖 For more details, check README.md" -ForegroundColor Cyan
Write-Host ""
