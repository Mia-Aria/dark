# rm -rf .next/cache
node -v
npm install -g npm@latest
npm config get registry

npm cache clean --force
rm -rf node_modules package-lock.json

npm install
npm run build
