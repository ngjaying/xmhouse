const assert = require('assert');
const app = require('../../src/app');

describe('\'househistory\' service', () => {
  it('registered the service', () => {
    const service = app.service('househistory');

    assert.ok(service, 'Registered the service');
  });
});
