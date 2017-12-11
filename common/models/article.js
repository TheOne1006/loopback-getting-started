'use strict';

module.exports = function(Article) {
  Article.api_a = function(cb) {
    // coding....
    const response = 'just only in group a';
    cb(null, response);
  };
  Article.remoteMethod(
    'api_a', {
      http: {
        path: '/api_a',
        verb: 'get',
      },
      returns: {
        arg: 'message',
        type: 'string',
      },
    }
  );

  Article.api_b = function(cb) {
    // coding....
    const response = 'in api_b';
    cb(null, response);
  };
  Article.remoteMethod(
    'api_b', {
      http: {
        path: '/api_b',
        verb: 'get',
      },
      returns: {
        arg: 'message',
        type: 'string',
      },
    }
  );
  // 公共方法，只要登录都可以访问
  Article.api_common = function(cb) {
    // coding....
    const response = 'common api';
    cb(null, response);
  };
  Article.remoteMethod(
    'api_common', {
      http: {
        path: '/api_common',
        verb: 'get',
      },
      returns: {
        arg: 'message',
        type: 'string',
      },
    }
  );
};
