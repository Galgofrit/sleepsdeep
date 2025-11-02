#!/usr/bin/env node
const fs = require('fs');

try {
  // Read translations.json
  const jsonContent = fs.readFileSync('translations.json', 'utf8');
  
  // Validate JSON
  JSON.parse(jsonContent);
  
  // Write to translations.js
  const jsContent = `const translations = ${jsonContent};\n`;
  fs.writeFileSync('translations.js', jsContent, 'utf8');
  
  console.log('✓ Successfully generated translations.js from translations.json');
} catch (error) {
  console.error('✗ Error:', error.message);
  process.exit(1);
}

