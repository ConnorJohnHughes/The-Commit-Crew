import passport from "passport";
import LocalStrategy from "passport-local";
import { findUserById, findUserByUsername, validatePassword } from "../src/services/user.service.js";

passport.serializeUser((user, done) => {
    console.log(`Saving ${user.userId} to session`);
    done(null, user.userId);
});

passport.deserializeUser(async (userId, done) => {
    console.log(`Reading ${userId} from session`);
    const user = await findUserById(userId);
    if (!user) {
        return done(null, false);
    } else {
        return done(null, user);
    }
});

passport.use(new LocalStrategy(async (username, password, done) => {
    const user = await findUserByUsername(username);
    if (!user) return done(null, false);

    const matched = await validatePassword(password, user.password);
    if(!matched) return done(null, false);

    return done(null, user);
}))