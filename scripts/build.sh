# ensure folder exists
mkdir build
# make bundle.js
npm run build
# copy over other source files (html, etc)
echo "Copying files"
cp -r src/* build

echo "Done!"
