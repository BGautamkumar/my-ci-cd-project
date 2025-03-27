const { assert } = require('chai');
const { greet } = require('../path/to/your/javascript/file'); // Adjust path

describe('Unit Tests', () => {
  it('should return the correct greeting message', () => {
    const message = greet();
    assert.strictEqual(message, 'Hello from Docker!');
  });
});
