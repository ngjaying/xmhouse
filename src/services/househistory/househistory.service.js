// Initializes the `househistory` service on path `/househistory`
const createService = require('feathers-sequelize');
const createModel = require('../../models/househistory.model');
const hooks = require('./househistory.hooks');
const filters = require('./househistory.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'househistory',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/househistory', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('househistory');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
