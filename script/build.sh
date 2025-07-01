# input your command here
node -v
npm install -g npm@latest
node -v
npm cache clean --force
rm -rf node_modules package-lock.json

npm install
npm run build