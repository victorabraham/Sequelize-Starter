const todosController = require('../controllers').todos;

module.exports = (app) => {
  app.post('/', todosController.create);
};