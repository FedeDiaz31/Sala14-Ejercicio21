const { sequelize, Article, User } = require("../models/index");

async function index(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("home", { articles });
}

async function showApiArticles(req, res) {
  const articles = await Article.findAll({ include: User });
  res.json(articles);
}

module.exports = { index, showApiArticles };
