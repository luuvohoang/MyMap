import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get users!" });
        return;
    }
};

export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });
        res.status(200).json(user); return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get user!" }); return;
    }
};

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const { password, avatar, ...inputs } = req.body;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized!" });
    }

    let updatedPassword = null;
    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar }),
            },
        });

        const { password: userPassword, ...rest } = updatedUser;

        res.status(200).json(rest); return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update users!" }); return;
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized!" });
    }

    try {
        await prisma.user.delete({
            where: { id },
        });
        res.status(200).json({ message: "User deleted" }); return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to delete users!" }); return;
    }
};

export const savePost = async (req, res) => {
    const postId = req.body.postId;
    const tokenUserId = req.userId;

    try {
        console.log(req.userId)
        const savedPost = await prisma.savedPost.findUnique({
            where: {
                userId_postId: {
                    userId: tokenUserId,
                    postId,
                },
            },
        });

        if (savedPost) {
            console.log("run here")
            await prisma.savedPost.delete({
                where: {
                    id: savedPost.id,
                },
            });
            res.status(200).json({ message: "Post removed from saved list" }); return;
        } else {
            await prisma.savedPost.create({
                data: {
                    userId: tokenUserId,
                    postId,
                },
            });
            res.status(200).json({ message: "Post saved" }); return;
        }
    } catch (err) {
        console.log(err + "!!!");
        res.status(500).json({ message: "Failed to delete users!" }); return;
    }
};

export const profilePosts = async (req, res) => {
    const tokenUserId = req.userId;
    try {
        // console.log(tokenUserId)
        const userPosts = await prisma.post.findMany({
            where: { userId: tokenUserId },
        });
        // console.log(userPosts)
        const saved = await prisma.savedPost.findMany({
            where: { userId: tokenUserId },
            include: {
                post: true,
            },
        });
        // console.log(userPosts)
        const savedPosts = saved.map((item) => item.post);
        res.status(200).json({ userPosts, savedPosts }); return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get profile posts!" }); return;
    }
};

export const getNotificationNumber = async (req, res) => {
    const tokenUserId = req.userId;
    try {
        // console.log("run getNotificationNumber here")
        const number = await prisma.chat.count({
            where: {
                userIDs: {
                    hasSome: [tokenUserId],
                },
                NOT: {
                    seenBy: {
                        hasSome: [tokenUserId],
                    },
                },
            },
        });
        // console.log(number)
        res.status(200).json(number); 
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get profile posts!" }); return;
    }
};