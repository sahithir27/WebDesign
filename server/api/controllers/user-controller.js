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

export const getUsers = async (request, response)=>{
    try {
        const users = await userService.getUsers(uuid);
        httpUtils.setSuccessResponse(users, response);
    } catch (error) {
        httpUtils.setErrorResponse(error, response);
    }
}