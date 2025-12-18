@echo off
title MERN Portfolio - Installation Instructions
color 0A

echo.
echo ========================================
echo   MERN PORTFOLIO INSTALLATION GUIDE
echo ========================================
echo.
echo This guide will help you set up your MERN portfolio application.
echo.
pause

:MENU
cls
echo.
echo ========================================
echo   INSTALLATION MENU
echo ========================================
echo.
echo   1. Check Prerequisites
echo   2. Install Server Dependencies
echo   3. Install Client Dependencies
echo   4. Setup Environment Files
echo   5. Start MongoDB Service
echo   6. Seed Database
echo   7. Start Development Servers
echo   8. Open MongoDB Compass
echo   9. View Documentation
echo   0. Exit
echo.
echo ========================================
echo.

set /p choice="Enter your choice (0-9): "

if "%choice%"=="1" goto CHECK_PREREQ
if "%choice%"=="2" goto INSTALL_SERVER
if "%choice%"=="3" goto INSTALL_CLIENT
if "%choice%"=="4" goto SETUP_ENV
if "%choice%"=="5" goto START_MONGO
if "%choice%"=="6" goto SEED_DB
if "%choice%"=="7" goto START_DEV
if "%choice%"=="8" goto OPEN_COMPASS
if "%choice%"=="9" goto VIEW_DOCS
if "%choice%"=="0" goto EXIT

goto MENU

:CHECK_PREREQ
cls
echo.
echo Checking Prerequisites...
echo.

echo Checking Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is NOT installed!
    echo Please download from: https://nodejs.org/
    echo.
) else (
    echo [OK] Node.js is installed
    node --version
    echo.
)

echo Checking npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is NOT installed!
    echo.
) else (
    echo [OK] npm is installed
    npm --version
    echo.
)

echo Checking MongoDB...
mongod --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] MongoDB is NOT installed!
    echo Please download from: https://www.mongodb.com/try/download/community
    echo.
) else (
    echo [OK] MongoDB is installed
    echo.
)

echo.
pause
goto MENU

:INSTALL_SERVER
cls
echo.
echo Installing Server Dependencies...
echo.
cd server
call npm install
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to install server dependencies!
    echo.
) else (
    echo.
    echo [SUCCESS] Server dependencies installed successfully!
    echo.
)
cd ..
pause
goto MENU

:INSTALL_CLIENT
cls
echo.
echo Installing Client Dependencies...
echo.
cd client
call npm install
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to install client dependencies!
    echo.
) else (
    echo.
    echo [SUCCESS] Client dependencies installed successfully!
    echo.
)
cd ..
pause
goto MENU

:SETUP_ENV
cls
echo.
echo Setting up Environment Files...
echo.

echo Checking server .env file...
if not exist "server\.env" (
    copy "server\.env.example" "server\.env"
    echo [CREATED] server\.env file created from example
) else (
    echo [EXISTS] server\.env file already exists
)
echo.

echo Checking client .env file...
if not exist "client\.env" (
    copy "client\.env.example" "client\.env"
    echo [CREATED] client\.env file created from example
) else (
    echo [EXISTS] client\.env file already exists
)
echo.

echo.
echo Environment files are ready!
echo You can edit them if needed:
echo - server\.env (MongoDB connection, port, etc.)
echo - client\.env (API URL)
echo.
pause
goto MENU

:START_MONGO
cls
echo.
echo Starting MongoDB Service...
echo.
net start MongoDB
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to start MongoDB service!
    echo Make sure MongoDB is installed and you're running as Administrator.
    echo.
) else (
    echo.
    echo [SUCCESS] MongoDB service started!
    echo Connection: mongodb://localhost:27017
    echo.
)
pause
goto MENU

:SEED_DB
cls
echo.
echo Seeding Database...
echo.
echo This will populate your database with sample data.
echo.
cd server
call npm run seed
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to seed database!
    echo Make sure MongoDB is running.
    echo.
) else (
    echo.
    echo [SUCCESS] Database seeded successfully!
    echo Database: My_Portfolio
    echo Collections: projects, contacts
    echo.
)
cd ..
pause
goto MENU

:START_DEV
cls
echo.
echo Starting Development Servers...
echo.
echo Backend will start on:  http://localhost:5000
echo Frontend will start on: http://localhost:5173
echo.
echo Opening two terminal windows...
echo Press Ctrl+C in each window to stop the servers.
echo.

start cmd /k "cd server && npm run dev"
timeout /t 3 /nobreak >nul
start cmd /k "cd client && npm run dev"

echo.
echo [INFO] Development servers are starting...
echo Check the opened terminal windows.
echo.
pause
goto MENU

:OPEN_COMPASS
cls
echo.
echo Opening MongoDB Compass...
echo.
echo If MongoDB Compass is not installed:
echo Download from: https://www.mongodb.com/products/compass
echo.
echo Connection String: mongodb://localhost:27017
echo Database: My_Portfolio
echo.
start mongodb-compass://localhost:27017
pause
goto MENU

:VIEW_DOCS
cls
echo.
echo ========================================
echo   DOCUMENTATION
echo ========================================
echo.
echo Available documentation files:
echo.
echo   README.md              - Main documentation
echo   QUICKSTART.md          - Quick start guide
echo   SETUP_SUMMARY.md       - Complete setup summary
echo   PROJECT_OVERVIEW.md    - Project details
echo   MONGODB_COMPASS_GUIDE.md - Database guide
echo   DEPLOYMENT_GUIDE.md    - Deployment instructions
echo.
echo Opening README.md...
start README.md
echo.
pause
goto MENU

:EXIT
cls
echo.
echo ========================================
echo   Thank you for using MERN Portfolio!
echo ========================================
echo.
echo Quick reference:
echo.
echo Start Backend:  cd server ^&^& npm run dev
echo Start Frontend: cd client ^&^& npm run dev
echo Seed Database:  cd server ^&^& npm run seed
echo.
echo Visit: http://localhost:5173
echo.
echo Happy coding! 🚀
echo.
pause
exit

