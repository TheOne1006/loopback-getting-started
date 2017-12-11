'use strict';

module.exports = function(app) {
  app.dataSources.db.automigrate('RoleMapping', function(err) {
    var RoleMapping = app.models.RoleMapping;
    if (err) throw err;

    app.models.RoleMapping.create([{
      principalId: 1, // admin_a 管理员的id
      roleId: 1, // group_a 的 id
      principalType: RoleMapping.USER,
    }, {
      principalId: 2, // admin_b 管理员的id
      roleId: 2, // group_b 的 id
      principalType: RoleMapping.USER,
    }], function(err, mapping) {
      if (err) throw err;

      console.log('Models created: \n', mapping);
    });
  });
};
