import { connection } from "../model/db.connect.js";

export const findUserById = async (userId) => {
    const id = Number(userId);
    if(Number.isNaN(id)) return null;

    const [results] = await connection.query(
        "SELECT * FROM users WHERE userId = ? LIMIT 1",
        [id]
    );

    return results;
}