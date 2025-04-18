import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';

/**
 * User Signup Controller
 */
export const signup = async (req, res) => {
  try {
    console.log("📩 Incoming data:", req.body);

    const { fullname, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists..." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = new User({
      fullname,
      email,
      password: hashedPassword
    });

    await createdUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email
      }
    });

  } catch (error) {
    console.log("❌ Signup Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * User Login Controller
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email
      }
    });

  } catch (error) {
    
    res.status(500).json({ message: "Internal Server Error" });
  }
};
