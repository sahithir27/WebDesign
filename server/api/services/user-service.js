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

export const updateUser = async (uuid, updatedUser) =>{
    try {
        const user = await User.findOneAndUpdate({uuid: uuid}, updatedUser , {returnDocument:'after'});
        return user;
    } catch (error) {
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

