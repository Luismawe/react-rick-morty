al/usr/bin/env sh

#abort on errors
set -@

#build
npm run build

#navigate into the build output directory
cd dist

#if you are deploying to a custom domain
#echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

#if you are deploying to https://<username>.github.io
git push -f git@github.com:Luismawe/react-rick-morty.git main:gh-pages

cd -


