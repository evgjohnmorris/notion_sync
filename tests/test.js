const assert = require('assert');
const tools = require('./src/tools/index.js');

console.log('🧪 Starting Lab Test for 7,000 Notion Tools...');

try {
  const keys = Object.keys(tools);
  
  // 1. Verify we have exactly 7,000 tools
  assert.strictEqual(keys.length, 7000, `Expected 7000 tools, but found ${keys.length}`);
  
  // 2. Verify all of them are functions
  let invalidCount = 0;
  keys.forEach(key => {
    if (typeof tools[key] !== 'function') {
      console.error(`❌ Tool ${key} is not a valid function!`);
      invalidCount++;
    }
  });
  
  assert.strictEqual(invalidCount, 0, `Found ${invalidCount} invalid tools that are not functions.`);

  console.log('✅ All 7,000 tools successfully passed the lab test!');
  console.log('Each tool is successfully registered and exported as a function, ready for Notion API calls.');
} catch (error) {
  console.error('🚨 Lab test failed:', error.message);
  process.exit(1);
}
