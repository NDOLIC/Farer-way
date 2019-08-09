import express from 'express';
import Signup from '../controllers/signup';
import Signin from '../controllers/signin';
import Trips from '../controllers/trips';
import Validation from '../middleware/validations';

const router = express.Router();

router.post('/trips', (req, res) => Trips.create);
router.post('/auth/signup', Validation, (req, res) =>  Signup.signup(req, res));
router.post('/auth/signin', (req, res) => Signin.signin(req, res));
router.get('/trips', (req, res) => Trips.getAll);
 router.get('/trips/:id', (req, res) => Trips.getOne);
 router.put('/trips/:id', (req, res) => Trips.update);
 router.delete('/trips/:id', (req, res) => Trips.delete);

export default router;