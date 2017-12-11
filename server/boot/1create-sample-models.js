'use strict';

module.exports = function(app) {

  app.dataSources.db.automigrate('admin', function(err) {
    if (err) throw err;

    app.models.admin.create([{
      username: 'admin_a',
      password: 'admin',
      email: 'admin@admin.com',
    }, {
      username: 'admin_b',
      password: 'admin',
      email: 'admin@admin2.com',
    }], function(err, admin) {
      if (err) throw err;

      console.log('Models created: \n', admin);
    });
  });

  app.dataSources.db.automigrate('article', function(err) {
    if (err) throw err;

    app.models.article.create([{
      title: 'title',
      authorId: 1,
      content: 'content',
    }], function(err, article) {
      if (err) throw err;

      console.log('Models created: \n', article);
    });
  });

  app.dataSources.db.automigrate('Role', function(err) {
    if (err) throw err;

    app.models.Role.create([{
      name: 'group_a',
      description: 'A组',
    }, {
      name: 'group_b',
      description: 'B组',
    }], function(err, roles) {
      if (err) throw err;

      console.log('Models created: \n', roles);
    });
  });
};
