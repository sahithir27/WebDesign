import express from "express";
import * as userController from '../controllers/user-controller.js';

const router = express.Router();

//add userController post and get methods 
router.route('/users')
    .post(userController.post)
    .get(userController.getUsers);

//add userController login method
router.route('/users/login/:uuid')
.post(userController.login);

//add userController update and get user by id methods
router.route('/users/:uuid')
.put(userController.updateUser)
.get(userController.getUserById);

export default router;    