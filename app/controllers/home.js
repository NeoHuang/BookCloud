var express = require('express'),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = {
  get : function (req, res, next) {
    Article.find(function (err, articles) {
      if (err) return next(err);
      res.render('index', {
        title: 'Generator-Express',
        articles: articles
      });
    });
  }
}

