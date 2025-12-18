# MERN Portfolio - Start Development Servers
# This script starts both backend and frontend servers

Write-Host "🚀 Starting MERN Portfolio Development Servers" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check if MongoDB is running
Write-Host "Checking MongoDB connection..." -ForegroundColor Yellow
$mongoRunning = $false
try {
    $null = mongo --eval "db.version()" --quiet 2>$null
    if ($LASTEXITCODE -eq 0) {
        $mongoRunning = $true
    }
} catch {
    $mongoRunning = $false
}

if (-not $mongoRunning) {
    Write-Host "⚠️  MongoDB is not running!" -ForegroundColor Yellow
    Write-Host "Starting MongoDB service..." -ForegroundColor Yellow
    try {
        net start MongoDB
        Write-Host "✅ MongoDB service started" -ForegroundColor Green
    } catch {
        Write-Host "❌ Failed to start MongoDB. Please start it manually." -ForegroundColor Red
        Write-Host "Command: net start MongoDB" -ForegroundColor Gray
        exit 1
    }
} else {
    Write-Host "✅ MongoDB is running" -ForegroundColor Green
}

Write-Host ""
Write-Host "🔧 Starting development servers..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Backend will run on:  http://localhost:5000" -ForegroundColor Cyan
Write-Host "Frontend will run on: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop all servers" -ForegroundColor Gray
Write-Host ""

# Start servers using concurrently
npm run dev
