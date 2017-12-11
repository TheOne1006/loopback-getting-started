'use strict';

module.exports = function(app) {
  app.dataSources.db.automigrate('article', function(err) {
    if (err) throw err;

    app.models.article.create([{
      title: 'title',
	  authorId: 1,
	  content: 'content'
    }], function(err, article) {
      if (err) throw err;

      console.log('Models created: \n', article);
    });
  });
};
