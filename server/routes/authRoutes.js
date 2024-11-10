import {Router} from 'express'
import { login, sigin } from '../controllers/loginControllers.js';
const loginRouter = Router();

loginRouter.post('/login',login)
loginRouter.post('/signin',sigin)

export default loginRouter
