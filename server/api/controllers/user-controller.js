import {userService}  from "../services/index.js";
import { httpUtils } from "../utils/index.js";
import { encryptField } from "../models/user.js";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nuevents2022@gmail.com",
        pass: "gmzlepiwqaizkgpq"
    }
});


export const post = async (request, response) =>{
    try {
        const payload = request.body;
        const user = await userService.save(payload);
        const options = {
            from: "nuevents2022@gmail.com",
            to: request.body.email,
            subject: "Welcome to NUevents!",
            text: "Hi " +request.body.firstName +"!! welcome to NUevents, start exploring the upcoming events!"
        };

        transporter.sendMail(options, function (err, info) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("sent :" + info.response);
        })
        httpUtils.setSuccessResponse({"isSignedUp": true, "message": "user signed up"}, response);
    } catch (error) {
        httpUtils.setConflictResponse({"isSignedUp": false, "message" : "username already exists"}, response);
    }
}

export const login = async (request, response) =>{
    try {
        const uuid = request.params.uuid
        const pwd = request.body.password;
        const user = await userService.login(uuid, pwd);
        httpUtils.setSuccessResponse(user, response);
    } catch (error) {
        httpUtils.setUnauthorizedResponse({"authenticated": false, "message" : "No user found"}, response);
    }
}

export const updateUser = async (request, response)=>{
    try {
        const uuid = request.params.uuid;
        const updatedUser = request.body;
        if(updatedUser.password){    
            updatedUser.password = await encryptField(updatedUser.password)  
        }if(updatedUser.securityAnswer){    
            updatedUser.securityAnswer = await encryptField(updatedUser.securityAnswer)
        }
        const user = await userService.updateUser(uuid, updatedUser);
        httpUtils.setSuccessResponse({"userUpdated": true, "user":user}, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}

export const getUserById = async (request, response)=>{
    try {
        const uuid = request.params.uuid;
        const user = await userService.getUserById(uuid);
        httpUtils.setSuccessResponse(user, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}

export const getUsers = async (request, response)=>{
    try {
        const users = await userService.getUsers();
        httpUtils.setSuccessResponse(users, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}