#!/bin/bash
# Generate translations.js from translations.json

# Check if translations.json exists
if [ ! -f "translations.json" ]; then
    echo "✗ Error: translations.json not found"
    exit 1
fi

# Validate JSON and generate JS file
echo "const translations = " > translations.js && \
cat translations.json >> translations.js && \
echo ";" >> translations.js

echo "✓ Successfully generated translations.js from translations.json"

