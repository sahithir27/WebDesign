import express from "express";
import * as userController from '../controllers/user-controller.js';

const router = express.Router();

//add userController post and get methods 
router.route('/users')
    .post(userController.post)
    .get(userController.getUsers);

//add userController login method
router.route('/users/login/:uuid')
.post();

//add userController update and get user by id methods
router.route('/users/:uuid')
.put()
.get();

//add userController verifySecurityAnswer method
router.route('/users/verify-security/:uuid')
.get();

export default router;    