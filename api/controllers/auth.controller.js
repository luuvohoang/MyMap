import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    const {username, email, password} = req.body;

    try{
        // hash your password
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(hashedPassword);
        // create a new user and push to db
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password:  hashedPassword,
            },
        });
        console.log(newUser);
        res.status(201).json({message: "User created successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Fail to create user"});
    }
}
export const login = async (req, res) => {
    const {username, password} = req.body;

    try{
        // check if user already exists

        const user = await prisma.user.findUnique({
            where: {username},
        })

        if(!user) return res.status(401).json({message: "Invalid Credentials!"});
        // check if password is correct

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) return res.status(401).json({message: "Invalid Credentials!"});

        // create a token
        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY, {expiresIn: age});

        // send the token to the client
        //res.setHeader("Set-Cookie", "test=" + "myValue").json("success");

        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            // sameSite: "none",
             maxAge: age,
            // path: "/",
        }).status(200).json({message: "Login successfully"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Fail to login"});
    }
}
export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({message: "Logout successfully"});
}