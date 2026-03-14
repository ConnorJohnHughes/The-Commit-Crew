import { connection } from "../model/db.connect.js";
import bcrypt from 'bcrypt'

export const hashPassword = async (plainPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(plainPassword, salt);
    return hash;
}

export const validatePassword = async (plainPassword, storedPassHash) => {
    const matched = await bcrypt.compare(plainPassword, storedPassHash);
    return matched;
};

export const findUserById = async (userId) => {
    const id = Number(userId);
    if(Number.isNaN(id)) return null;

    const [results] = await connection.query(
        "SELECT * FROM users WHERE userId = ? LIMIT 1",
        [id]
    );

    return results;
}

export const findUserByUsername = async (username) => {
    const [ results ] = await connection.query(
        "SELECT userId, username, password FROM users WHERE username = ? LIMIT 1",
        [username]
    );

    return results[0];
};

export const createUser = async (username, plainPassword) =>{
    if (!username) throw new Error("Username is Required.");
    
    const passwordHash = await hashPassword(plainPassword);

    const result = await connection.execute(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, passwordHash]
    )
    return{
        userId: result.insertId,
        username
    }
}