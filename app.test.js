const test = require('node:test');
const assert = require('node:assert');
const server = require('./app');

test('el health check responde 200', async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  const res = await fetch(`http://localhost:${port}/health`);
  assert.strictEqual(res.status, 200);
  server.close();
});

test('la ruta principal responde 200', async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();
  const res = await fetch(`http://localhost:${port}/`);
  assert.strictEqual(res.status, 200);
  server.close();
});