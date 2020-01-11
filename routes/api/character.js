import express from 'express';
import models from '../../models';

const router = express.Router();

router.get('/', (req, res, next) => {
  const customer = models.Character.getAll();
  res.send(customer);
});

router.get('/:id', (req, res, next) => {
  const customer = models.Character.get(req.params['id']);
  res.send(customer);
});

router.post('/:id/edit', (req, res, next) => {
  try {
    models.Character.post(req.params['id'], _getModel(req));
  } catch (err) {
    next(err);
    return;
  }
  res.send(models.Character.get(req.params['id']));
});

router.post('/add', (req, res, next) => {
  let id;
  try {
    id = models.Character.put(_getModel(req));
  } catch (err) {
    next(err);
    return;
  }
  res.send(models.Character.get(id));
});

function _getModel(req) {
  return {
    name: req.body['Name'],
    culture: req.body['Culture'],
    born: req.body['Born'],
    gender: req.body['Gender'],
  };
}
export default router;
