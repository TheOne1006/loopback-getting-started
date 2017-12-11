'use strict';

module.exports = function(app) {
  app.dataSources.db.automigrate('admin', function(err) {
    if (err) throw err;

    app.models.admin.create([{
      username: 'admin',
      password: 'admin',
      email: 'admin@admin.com'
    }], function(err, admin) {
      if (err) throw err;

      console.log('Models created: \n', admin);
    });
  });
};
