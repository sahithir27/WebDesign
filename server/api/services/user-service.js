import User from '../models/user.js';
import Event from '../models/eventList.js';
/**
 * Function to add a new user
 * @param {*} newUser 
 * @returns created user object
 */
 export const save = (newUser)=>{
    try {
        const user = new User(newUser);
        return user.save();
    }catch(error){
        throw error
    }
}
export const login = async (uuid, pwd)=>{
    try {
    const user = await User.findOne({uuid:uuid});
    const res = await user.comparePwd(pwd);
    if(res){
        return { authenticated: res, user: user };
    }else{
        return { authenticated: res, message: 'Incorrect Password!'};
    }
    } catch (error) {
        throw error
    }
}
export const verifySecurityAnswer = async (uuid,question, answer)=>{
    try {
    const user = await User.findOne({uuid:uuid});
    if(user !== null){
        const res1 = await user.compareSecQuestion(question);
        const res2 = await user.compareSecAns(answer);
        return (res1 && res2);
    }else{
        return false;
    }
    } catch (error) {
        throw error
    } 
}
export const updateUser = async (uuid, updatedUser) =>{
    try {
        const user = await User.findOneAndUpdate({uuid: uuid}, updatedUser , {returnDocument:'after'});
        return user;
    } catch (error) {
        throw error;
    }
}
export const saveRegisteredEvent = async (uuid, eventID) => {
    try{
        const findUser = await User.findOne({uuid : uuid});
        if(!findUser.eventsRegistered.includes(eventID)){
            const user = await User.findOneAndUpdate({uuid : uuid}, 
                { $push: { eventsRegistered:  eventID} }, {returnDocument:'after'});
                return user;
        }
        else{
            return findUser;
        }
    } catch(error){
        throw error;
    }
}

export const unregisterEvent = async (uuid, eventID) => {
    try{
        const findUser = await User.findOne({uuid : uuid});
        if(findUser.eventsRegistered.includes(eventID)){
            const user = await User.findOneAndUpdate({uuid : uuid}, 
                { $pull: { eventsRegistered:  eventID} }, {returnDocument:'after'});
                return {user: user, message: "Event Unregistered Successfully"};
        }
        else{
            return {user: findUser, message: "Event not Registered"};
        }
    } catch(error){
        throw error;
    }
}
export const getUsers = async () => {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw error;
    }
}
export const getUserById = async (uuid) => {
    try {
        const user = await User.findOne({uuid: uuid});
        return user;
    } catch (error) {
        throw error;
    }
}