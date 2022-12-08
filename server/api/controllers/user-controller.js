import {userService}  from "../services/index.js";
import { eventData } from './../services/index.js';
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
        httpUtils.setSuccessResponse({"isSignedUp": true, "message": "user signed up", user: user}, response);
    } catch (error) {
        httpUtils.setConflictResponse({"isSignedUp": false, "message" : "username already exists", user: null}, response);
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
export const verifySecurityAnswer = async (request, response) =>{
    try {
        const uuid = request.params.uuid;
        const secQuestion = request.query.securityQuestion;
        const secAnswer = request.query.securityAnswer;
        const user = await userService.verifySecurityAnswer(uuid, secQuestion,secAnswer);
        if(user){
            httpUtils.setSuccessResponse({ "isUserCorrectDetails": true, "message": "correct user details" }, response);
        }else{
            httpUtils.setErrorResponse({ "isUserCorrectDetails": false, "message": "Incorrect user details" }, response);
        }   
    } catch (error) {
        httpUtils.setErrorResponse({"isUserCorrectDetails": false, "message" : "Incorrect user details"}, response);
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
export const saveRegisteredEvent = async (request, response)=>{
    try{
        const uuid = request.params.uuid;
        const eventId = Object.values(request.body)[0];
        const user = await userService.saveRegisteredEvent(uuid, eventId);
        const event = await eventData.countOfRegisteredUsers(eventId);
        httpUtils.setSuccessResponse(user, response);
    }catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}
export const saveInterestedEvent = async (request, response)=>{
    try{
        const uuid = request.params.uuid;
        const eventId = Object.values(request.body)[0];
        const user = await userService.saveInterestedEvent(uuid, eventId);
        httpUtils.setSuccessResponse(user, response);
    }catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}
export const unregisterEvent = async (request, response)=>{
    try{
        const uuid = request.params.uuid;
        const eventId = Object.values(request.body)[0];
        const user = await userService.unregisterEvent(uuid, eventId);
        httpUtils.setSuccessResponse(user, response);
    }catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
} 
export const unbookmarkEvent = async (request, response)=>{
    try{
        const uuid = request.params.uuid;
        const eventId = Object.values(request.body)[0];
        const user = await userService.unbookmarkEvent(uuid, eventId);
        httpUtils.setSuccessResponse(user, response);
    }catch (error) {
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