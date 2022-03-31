#!/bin/sh

set -e

cp package.json build
cp README.md build
cp -r src/assets build
cp -r ./src/*.css build
cp build/contexts/interface.js build/interface.js
