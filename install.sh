#!/bin/bash

echo "📦 Installing dependencies..."
npm install

echo "📋 Copying environment variables..."
cp .env.example .env.local

echo "🎨 Downloading VS Code font..."
mkdir -p public/fonts
curl -L "https://github.com/microsoft/cascadia-code/releases/download/v2111.01/CascadiaCode-2111.01.zip" -o cascadia.zip
unzip -j cascadia.zip "*.woff2" -d public/fonts/
rm cascadia.zip

echo "✅ Installation complete!"
echo "👉 Run 'npm run dev' to start the development server"
