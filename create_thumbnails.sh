#!/bin/bash

# To run this script, we need 2 things:
# 1. ImageMagick installed - the convert command comes from ImageMagick
# 2. Run chmod +x create_thumbnails.sh - this makes the script executable

# Create thumbnails for images in the static/gallery directory
cd static/gallery
for img in *.png; do
    convert "$img" -resize 500x "thumbnails/$img"
done
cd - > /dev/null

# Create thumbnails for images in the static/illustration directory
cd static/illustration
for img in *.png; do
    convert "$img" -resize 400x "thumbnails/$img"
done
cd - > /dev/null

# Create thumbnails for images in the static/photography directory
cd static/photography
for img in *.png; do
    convert "$img" -resize 400x "thumbnails/$img"
done
cd - > /dev/null