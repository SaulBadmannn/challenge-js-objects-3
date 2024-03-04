import assert from 'assert';
import test from 'node:test';
import scrabble from '../index.js';

test('Step 1', () => {
  assert.strictEqual(scrabble('rkqodlw', 'world'), true);
});

test('Step 2', () => {
  assert.strictEqual(scrabble('begsdhhtsexoult', 'hexlet'), true);
});

test('Step 3', () => {
  assert.strictEqual(scrabble('katas', 'steak'), false);
});

test('Step 4', () => {
  assert.strictEqual(scrabble('nastenka', 'steak'), true);
});

test('Step 5', () => {
  assert.strictEqual(scrabble('scriptjava', 'javascript'), true);
});

test('Step 6', () => {
  assert.strictEqual(scrabble('javaSprint', 'javascript'), false);
});

test('Step 7', () => {
  assert.strictEqual(scrabble('scriptjavest', 'javascript'), false);
});

test('Step 8', () => {
  assert.strictEqual(scrabble('', 'javascript'), false);
});

test('Step 9', () => {
  assert.strictEqual(scrabble('scriptingjava', 'JavaScript'), true);
});
