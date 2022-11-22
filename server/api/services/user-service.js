import User from '../models/user.js';

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

export const getUsers = async () => {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw error;
    }
}

