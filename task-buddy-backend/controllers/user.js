import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exists!" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials!" });

        const token = jwt.sign({ email: existingUser.email, _id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "2d" });

        const user = {
            name: existingUser.name,
            email: existingUser.email,
            token
        }

        res.status(200).json({ user });

    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).json({ message: "Something went wrong!"});
    }
}

export const signUp = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "User already exists!" });

        if(password !== confirmPassword) return res.status(400).json({ message: "Password don't match!" });

        const passwordHash = await bcrypt.hash(password, 12);

        const user = await User.create({ email, password: passwordHash, name: `${firstName} ${lastName}`, isEmailVerified: false, createdAt: new Date().toISOString() });

        const token = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_SECRET, { expiresIn: "2d" });

        res.status(200).json({ user: { name: user.name, email: user.email, token }});
    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).json({ message: "Something went wrong!"});
    }
}
